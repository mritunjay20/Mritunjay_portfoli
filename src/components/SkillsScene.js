import * as THREE from 'three';
import { skills } from '../data/skills.js';

/**
 * 3D Interactive Skills Constellation (Three.js)
 * Orbiting physical orbs for each technology with pointer repulsion/attraction,
 * glowing rings, hover HUD, and interactive detail inspection.
 */
export function initSkillsScene(canvas, tooltipEl, onSelectSkill) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 8.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));

  // Lighting
  scene.add(new THREE.AmbientLight(0x818cf8, 1.8));
  const pointLight = new THREE.PointLight(0x38bdf8, 25, 20);
  pointLight.position.set(2, 4, 5);
  scene.add(pointLight);

  const orbs = [];
  const rings = [];

  // Create an orb for each of the 16 skills
  skills.forEach((skill, i) => {
    const angle = (i / skills.length) * Math.PI * 2;
    const radiusX = 2.8 + (i % 2) * 0.45;
    const radiusY = 1.35 + (i % 3) * 0.2;
    const zDepth = Math.sin(angle) * 0.8;

    const orbMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(skill.color),
      metalness: 0.35,
      roughness: 0.2,
      clearcoat: 1.0,
      clearcoatRoughness: 0.15,
      emissive: new THREE.Color(skill.accent),
      emissiveIntensity: 0.35
    });

    const mesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.38, 2), orbMat);
    mesh.position.set(Math.cos(angle) * radiusX, Math.sin(angle * 2) * radiusY, zDepth);
    mesh.userData = {
      skill,
      base: mesh.position.clone(),
      index: i,
      baseScale: 1
    };
    scene.add(mesh);
    orbs.push(mesh);

    // Subtle planetary ring around each orb
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(skill.color),
      transparent: true,
      opacity: 0.5,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.015, 8, 48), ringMat);
    ring.rotation.x = Math.PI / 2.5;
    scene.add(ring);
    rings.push(ring);
  });

  // Orbital cosmic background curves
  for (let j = 0; j < 3; j++) {
    const curve = new THREE.EllipseCurve(0, 0, 3.2 + j * 0.4, 1.5 + j * 0.2, j * 0.8, j * 0.8 + Math.PI * 2, false, 0);
    const pts = curve.getPoints(80).map(p => new THREE.Vector3(p.x, p.y, 0));
    const lineGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const lineMat = new THREE.LineBasicMaterial({ color: 0x4f46e5, transparent: true, opacity: 0.25 });
    scene.add(new THREE.Line(lineGeo, lineMat));
  }

  // Pointer interactions
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(100, 100);
  let hoveredOrb = null;
  let clickedOrb = null;

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  canvas.addEventListener('pointerleave', () => {
    pointer.set(100, 100);
    hoveredOrb = null;
    if (tooltipEl) tooltipEl.classList.remove('visible');
  });

  canvas.addEventListener('pointerdown', () => {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(orbs);
    if (hits.length > 0) {
      clickedOrb = hits[0].object;
    }
  });

  canvas.addEventListener('pointerup', () => {
    if (clickedOrb) {
      if (typeof onSelectSkill === 'function') {
        onSelectSkill(clickedOrb.userData.skill);
      }
      clickedOrb = null;
    }
  });

  function resize() {
    const w = stage.clientWidth;
    const h = stage.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  new ResizeObserver(resize).observe(stage);
  resize();

  const clock = new THREE.Clock();
  let animId = null;

  function animate() {
    animId = requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(orbs);
    hoveredOrb = hits[0]?.object || null;

    orbs.forEach((orb, i) => {
      const angle = t * 0.12 + (i / orbs.length) * Math.PI * 2;
      const radiusX = 2.8 + (i % 2) * 0.45;
      const radiusY = 1.35 + (i % 3) * 0.2;

      // Orbital motion
      let targetX = Math.cos(angle) * radiusX;
      let targetY = Math.sin(angle * 2) * radiusY + Math.sin(t + i) * 0.08;
      let targetZ = Math.sin(angle) * 0.8;

      // Cursor repulsion/attraction
      if (pointer.x < 5) {
        const dx = targetX - pointer.x * 3.5;
        const dy = targetY - pointer.y * 2.5;
        const dist = Math.hypot(dx, dy);
        if (dist < 1.6 && dist > 0.01) {
          targetX += (dx / dist) * 0.35;
          targetY += (dy / dist) * 0.35;
        }
      }

      orb.position.x = THREE.MathUtils.lerp(orb.position.x, targetX, 0.08);
      orb.position.y = THREE.MathUtils.lerp(orb.position.y, targetY, 0.08);
      orb.position.z = THREE.MathUtils.lerp(orb.position.z, targetZ, 0.08);

      // Hover glow and scale
      if (orb === hoveredOrb) {
        orb.scale.setScalar(1.35);
        orb.material.emissiveIntensity = 1.0;
        rings[i].scale.setScalar(1.35);
        rings[i].material.opacity = 1.0;

        if (tooltipEl) {
          tooltipEl.innerHTML = `<strong>${orb.userData.skill.name}</strong> • <small>${orb.userData.skill.category}</small><p style="margin:4px 0 0;font-size:11px;color:#cbd5e1;">${orb.userData.skill.description}</p>`;
          tooltipEl.classList.add('visible');
        }
        canvas.style.cursor = 'pointer';
      } else {
        orb.scale.setScalar(1);
        orb.material.emissiveIntensity = 0.35;
        rings[i].scale.setScalar(1);
        rings[i].material.opacity = 0.5;
      }

      // Synchronize planetary ring position
      rings[i].position.copy(orb.position);
      rings[i].rotation.z = t * 0.4 + i;
    });

    if (!hoveredOrb) {
      if (tooltipEl) tooltipEl.classList.remove('visible');
      canvas.style.cursor = 'grab';
    }

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}
