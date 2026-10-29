import * as THREE from 'three';
import { gsap } from 'gsap';
import { milestones } from '../data/milestones.js';

/**
 * 3D Interactive Miniature World & Roadmap (Three.js)
 * Miniature voxel globe with recognizable procedural landmarks:
 * Taj Mahal, Pyramids of Giza, Eiffel Tower, Statue of Liberty, Great Wall
 * with glowing milestone stations along an expedition track.
 */
export function initJourneyWorld(canvas, onSelectMilestone) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 1.2, 7.8);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.shadowMap.enabled = true;

  // Lighting
  scene.add(new THREE.AmbientLight(0x93c5fd, 1.5));
  const sunLight = new THREE.DirectionalLight(0xffedd5, 3.0);
  sunLight.position.set(4, 7, 5);
  sunLight.castShadow = true;
  scene.add(sunLight);

  const purpleRim = new THREE.PointLight(0xa855f7, 4, 12);
  purpleRim.position.set(-4, -2, -2);
  scene.add(purpleRim);

  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // 1. Textured spherical Earth with approximate continent outlines.
  // Monument positions below use real latitude/longitude coordinates.
  const mapCanvas = document.createElement('canvas');
  mapCanvas.width = 1024; mapCanvas.height = 512;
  const ctx = mapCanvas.getContext('2d');
  const ocean = ctx.createLinearGradient(0, 0, 0, 512);
  ocean.addColorStop(0, '#183f5a'); ocean.addColorStop(0.5, '#0c3550'); ocean.addColorStop(1, '#08263b');
  ctx.fillStyle = ocean; ctx.fillRect(0, 0, 1024, 512);
  // Equirectangular land silhouettes (longitude/latitude coordinates).
  const continents = [
    [[-168,72],[-145,70],[-128,55],[-123,42],[-111,30],[-98,16],[-82,8],[-77,25],[-60,48],[-82,70],[-110,78],[-140,75]],
    [[-81,12],[-70,8],[-52,-5],[-35,-18],[-48,-40],[-68,-56],[-78,-25]],
    [[-18,35],[10,37],[34,28],[50,10],[42,-12],[27,-34],[12,-35],[-2,-10],[-17,15]],
    [[-10,36],[0,50],[20,60],[38,68],[60,58],[80,72],[110,65],[140,55],[160,48],[175,60],[160,70],[120,78],[70,80],[30,72],[5,60]],
    [[35,30],[55,20],[78,8],[98,5],[120,-8],[145,-10],[155,-25],[130,-42],[112,-10],[85,-5],[70,10],[48,5]],
    [[-52,60],[-30,65],[-20,78],[-42,84],[-60,75]],
    [[112,-11],[154,-10],[150,-39],[132,-44],[115,-30]]
  ];
  ctx.fillStyle = '#56815c'; ctx.strokeStyle = '#7da06b'; ctx.lineWidth = 2;
  for (const poly of continents) {
    ctx.beginPath();
    poly.forEach(([lon,lat],i)=>{const x=(lon+180)/360*1024,y=(90-lat)/180*512;i?ctx.lineTo(x,y):ctx.moveTo(x,y)});
    ctx.closePath(); ctx.fill(); ctx.stroke();
  }
  // Subtle latitude/longitude grid for a polished globe.
  ctx.strokeStyle = 'rgba(223,208,184,.13)'; ctx.lineWidth = 1;
  for(let lon=-180;lon<=180;lon+=30){const x=(lon+180)/360*1024;ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,512);ctx.stroke();}
  for(let lat=-60;lat<=60;lat+=30){const y=(90-lat)/180*512;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(1024,y);ctx.stroke();}
  const earthTexture = new THREE.CanvasTexture(mapCanvas);
  earthTexture.colorSpace = THREE.SRGBColorSpace;
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1.55, 64, 48), new THREE.MeshStandardMaterial({
    map: earthTexture, roughness: 0.82, metalness: 0.02, emissive: 0x0b2430, emissiveIntensity: 0.15
  }));
  earth.receiveShadow = true;
  worldGroup.add(earth);

  function placeLandmark(group, latitude, longitude) {
    const lat = THREE.MathUtils.degToRad(latitude);
    const lon = THREE.MathUtils.degToRad(longitude);
    const normal = new THREE.Vector3(
      -Math.cos(lat) * Math.sin(lon),
      Math.sin(lat),
      Math.cos(lat) * Math.cos(lon)
    ).normalize();
    group.position.copy(normal.clone().multiplyScalar(1.57));
    group.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
  }

  // Helper box creator
  function addBox(parent, x, y, z, sx, sy, sz, color, opts = {}) {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(sx, sy, sz),
      new THREE.MeshStandardMaterial({ color, roughness: 0.7, ...opts })
    );
    mesh.position.set(x, y, z);
    parent.add(mesh);
    return mesh;
  }

  // --- 2. Landmark A: Taj Mahal ---
  const tajGroup = new THREE.Group();
  placeLandmark(tajGroup, 27.1751, 78.0421);
  worldGroup.add(tajGroup);

  const marbleColor = 0xf8fafc;
  // Plinth Base
  addBox(tajGroup, 0, 0, 0, 0.9, 0.12, 0.9, marbleColor);
  // Main Central Tomb
  addBox(tajGroup, 0, 0.28, 0, 0.58, 0.45, 0.58, marbleColor);
  // Central Onion Dome
  const dome = new THREE.Mesh(
    new THREE.SphereGeometry(0.24, 16, 12),
    new THREE.MeshStandardMaterial({ color: marbleColor, roughness: 0.3 })
  );
  dome.position.set(0, 0.62, 0);
  dome.scale.set(1, 1.25, 1);
  tajGroup.add(dome);

  // 4 Corner Minarets
  [[-0.38, -0.38], [0.38, -0.38], [-0.38, 0.38], [0.38, 0.38]].forEach(([mx, mz]) => {
    addBox(tajGroup, mx, 0.32, mz, 0.08, 0.65, 0.08, marbleColor);
  });

  // --- 3. Landmark B: Egyptian Pyramids ---
  const pyramidGroup = new THREE.Group();
  placeLandmark(pyramidGroup, 29.9792, 31.1342);
  worldGroup.add(pyramidGroup);

  const sandstoneColor = 0xd97706;
  // Stepped tiers forming Giza Pyramid
  addBox(pyramidGroup, 0, 0, 0, 0.85, 0.14, 0.85, sandstoneColor);
  addBox(pyramidGroup, 0, 0.12, 0, 0.65, 0.14, 0.65, sandstoneColor);
  addBox(pyramidGroup, 0, 0.24, 0, 0.45, 0.14, 0.45, sandstoneColor);
  addBox(pyramidGroup, 0, 0.36, 0, 0.25, 0.14, 0.25, 0xfbbf24); // Golden capstone

  // --- 4. Landmark C: Great Wall of China ---
  const wallGroup = new THREE.Group();
  placeLandmark(wallGroup, 40.4319, 116.5704);
  worldGroup.add(wallGroup);

  const stoneColor = 0x64748b;
  // Curving wall segment with watchtowers
  addBox(wallGroup, -0.4, 0, 0, 0.18, 0.35, 0.18, stoneColor); // Watchtower 1
  addBox(wallGroup, 0, -0.05, 0, 0.6, 0.2, 0.12, stoneColor);  // Rampart wall
  addBox(wallGroup, 0.4, 0, 0, 0.18, 0.35, 0.18, stoneColor);  // Watchtower 2

  // --- 5. Landmark D: Eiffel Tower ---
  const eiffelGroup = new THREE.Group();
  placeLandmark(eiffelGroup, 48.8584, 2.2945);
  worldGroup.add(eiffelGroup);

  const ironColor = 0x78716c;
  addBox(eiffelGroup, 0, 0.08, 0, 0.45, 0.16, 0.45, ironColor);
  addBox(eiffelGroup, 0, 0.32, 0, 0.3, 0.32, 0.3, ironColor);
  addBox(eiffelGroup, 0, 0.65, 0, 0.12, 0.42, 0.12, ironColor);
  // Spire pinnacle
  addBox(eiffelGroup, 0, 0.95, 0, 0.03, 0.35, 0.03, 0x38bdf8, { emissive: 0x0284c7, emissiveIntensity: 1.2 });

  // --- 6. Landmark E: Statue of Liberty ---
  const libertyGroup = new THREE.Group();
  placeLandmark(libertyGroup, 40.6892, -74.0445);
  worldGroup.add(libertyGroup);

  const patinaGreen = 0x14b8a6;
  addBox(libertyGroup, 0, 0, 0, 0.4, 0.28, 0.4, 0x475569); // Pedestal
  addBox(libertyGroup, 0, 0.35, 0, 0.22, 0.45, 0.22, patinaGreen); // Robed Statue
  // Raised arm with glowing torch
  const arm = addBox(libertyGroup, 0.12, 0.62, 0.05, 0.06, 0.25, 0.06, patinaGreen);
  arm.rotation.z = -0.3;
  addBox(libertyGroup, 0.18, 0.76, 0.05, 0.08, 0.08, 0.08, 0xf59e0b, { emissive: 0xd97706, emissiveIntensity: 2.0 }); // Torch flame

  // --- 7. Milestone Stations on Glowing Expedition Track ---
  const trackCurvePts = milestones.map(m => new THREE.Vector3(...m.position));
  const trackGeo = new THREE.BufferGeometry().setFromPoints(trackCurvePts);
  const trackLine = new THREE.Line(trackGeo, new THREE.LineBasicMaterial({ color: 0x38bdf8, linewidth: 2 }));
  worldGroup.add(trackLine);

  const milestoneMarkers = [];
  milestones.forEach((m, idx) => {
    const markerMat = new THREE.MeshStandardMaterial({
      color: m.done ? 0x10b981 : 0x8b5cf6,
      emissive: m.done ? 0x059669 : 0x6d28d9,
      emissiveIntensity: 1.6
    });

    const marker = new THREE.Mesh(new THREE.OctahedronGeometry(m.done ? 0.16 : 0.14, 0), markerMat);
    marker.position.set(m.position[0], m.position[1], m.position[2] + 0.12);
    marker.userData = { milestone: m, index: idx };
    worldGroup.add(marker);
    milestoneMarkers.push(marker);
  });

  // Background Nebula Stars
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 300; i++) {
    starPos.push((Math.random() - 0.5) * 14, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8 - 2);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x818cf8, size: 0.02, transparent: true, opacity: 0.7 })));

  // Pointer Drag Rotation & Raycast
  let isDown = false;
  let prevX = 0, prevY = 0;
  let targetRotX = -0.15, targetRotY = -0.35;

  canvas.addEventListener('pointerdown', (e) => {
    isDown = true;
    prevX = e.clientX;
    prevY = e.clientY;
    canvas.setPointerCapture(e.pointerId);
  });

  canvas.addEventListener('pointermove', (e) => {
    if (isDown) {
      targetRotY += (e.clientX - prevX) * 0.008;
      targetRotX += (e.clientY - prevY) * 0.008;
      targetRotX = Math.max(-1.1, Math.min(1.1, targetRotX));
      prevX = e.clientX;
      prevY = e.clientY;
    }
  });

  canvas.addEventListener('pointerup', () => { isDown = false; });
  canvas.addEventListener('pointercancel', () => { isDown = false; });

  // Zooming
  canvas.addEventListener('wheel', (e) => {
    e.preventDefault();
    camera.position.z = THREE.MathUtils.clamp(camera.position.z + e.deltaY * 0.006, 3.8, 12);
  }, { passive: false });

  // Raycast Click on Milestones
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();

  canvas.addEventListener('click', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);

    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(milestoneMarkers);
    if (hits.length > 0) {
      const selected = hits[0].object.userData.milestone;
      if (typeof onSelectMilestone === 'function') {
        onSelectMilestone(selected);
      }
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

    worldGroup.rotation.x = THREE.MathUtils.lerp(worldGroup.rotation.x, targetRotX, 0.08);
    worldGroup.rotation.y = THREE.MathUtils.lerp(worldGroup.rotation.y, targetRotY, 0.08);

    // Subtle milestone pulse
    milestoneMarkers.forEach((m, i) => {
      m.rotation.y = t * 1.2 + i;
      m.position.y = milestones[i].position[1] + Math.sin(t * 2.5 + i) * 0.06;
    });

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    zoomIn: () => { camera.position.z = Math.max(3.8, camera.position.z - 0.8); },
    zoomOut: () => { camera.position.z = Math.min(12, camera.position.z + 0.8); },
    resetView: () => {
      gsap.to(worldGroup.rotation, { x: -0.15, y: -0.35, duration: 0.8 });
      gsap.to(camera.position, { z: 7.8, duration: 0.8 });
    },
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}
