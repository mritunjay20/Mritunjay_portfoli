import * as THREE from 'three';
import { gsap } from 'gsap';
import { speakHello } from '../utils/speech.js';
import { openCameraModal } from '../utils/camera.js';

/**
 * Interactive 3D Voxel Avatar
 * Minecraft-style character modeled from Mritunjay's portrait and character sheet:
 * - Sculpted wavy dark hair, expressive eyes, formal suit & cyber hoodie modes
 * - Real-time cursor tracking for head and gaze
 * - Raycast clickable hotspots: Head (Education), Eyes (Camera), Mouth (Speak), Chest (Contact), Right Hand (Wave)
 * - Orbiting floating skill glyphs and ambient particle matrix
 */
export function initAvatarScene(canvas, tooltipEl) {
  if (!canvas) return;

  const stage = canvas.parentElement;
  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  camera.position.set(0, 1.25, 8.4);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2.0));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;

  // Cinematic Dark Lighting
  const hemiLight = new THREE.HemisphereLight(0xdfd0b8, 0x222831, 2.2);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xdfd0b8, 3.2);
  keyLight.position.set(3.5, 6, 5);
  keyLight.castShadow = true;
  scene.add(keyLight);

  const violetRim = new THREE.PointLight(0x948979, 12, 14);
  violetRim.position.set(-3.5, 2.2, 2.5);
  scene.add(violetRim);

  const emeraldRim = new THREE.PointLight(0x7CFF4E, 18, 10);
  emeraldRim.position.set(3.5, -1.0, 1.5);
  scene.add(emeraldRim);

  const avatarRoot = new THREE.Group();
  scene.add(avatarRoot);

  // Material Palettes
  const skinColor = 0xcba184;
  const hairColor = 0x141217;
  const suitColor = 0x07090e;
  const shirtColor = 0xf8fafc;
  const purpleTieColor = 0x948979;
  const neonGreenColor = 0x7CFF4E;
  const shoeColor = 0xe2e8f0;

  function createBox(parent, x, y, z, sx, sy, sz, color, opts = {}) {
    const geo = new THREE.BoxGeometry(sx, sy, sz);
    const mat = new THREE.MeshStandardMaterial({
      color,
      roughness: opts.roughness ?? 0.65,
      metalness: opts.metalness ?? 0.15,
      ...opts
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  // --- 1. Torso & Chest ---
  const chestGroup = new THREE.Group();
  chestGroup.position.set(0, -0.45, 0);
  avatarRoot.add(chestGroup);

  // Main Torso Body
  const torsoBase = createBox(chestGroup, 0, 0, 0, 1.12, 1.18, 0.62, suitColor);
  torsoBase.userData = { hotspot: 'chest', label: 'Chest: View Contact & Socials' };

  // Formal Suit Layers: Shirt, Tie, Lapels
  const suitGroup = new THREE.Group();
  chestGroup.add(suitGroup);

  // White formal shirt center
  createBox(suitGroup, 0, 0.08, 0.32, 0.42, 0.95, 0.04, shirtColor);
  // Electric violet tie
  createBox(suitGroup, 0, -0.04, 0.35, 0.13, 0.58, 0.04, purpleTieColor, {
    emissive: 0x6d28d9,
    emissiveIntensity: 0.4
  });
  // Suit lapels left & right
  const lapelL = createBox(suitGroup, -0.24, 0.12, 0.35, 0.18, 0.55, 0.04, 0x161822);
  lapelL.rotation.z = -0.22;
  const lapelR = createBox(suitGroup, 0.24, 0.12, 0.35, 0.18, 0.55, 0.04, 0x161822);
  lapelR.rotation.z = 0.22;

  // Cyber Hoodie Alternative Layer (from uploaded Minecraft character sheet!)
  const hoodieGroup = new THREE.Group();
  hoodieGroup.visible = false;
  chestGroup.add(hoodieGroup);

  // Green 'M' logo on chest
  createBox(hoodieGroup, 0, 0.12, 0.33, 0.22, 0.22, 0.03, neonGreenColor, {
    emissive: 0x059669,
    emissiveIntensity: 0.8
  });
  // Green hoodie drawstrings
  createBox(hoodieGroup, -0.14, -0.08, 0.34, 0.04, 0.38, 0.03, neonGreenColor);
  createBox(hoodieGroup, 0.14, -0.08, 0.34, 0.04, 0.38, 0.03, neonGreenColor);
  // Neon green 'M' on the back of the hoodie
  createBox(hoodieGroup, 0, 0.12, -0.33, 0.28, 0.28, 0.03, neonGreenColor, {
    emissive: 0x059669,
    emissiveIntensity: 0.8
  });

  // --- 2. Head & Facial Anatomy ---
  const headGroup = new THREE.Group();
  headGroup.position.set(0, 0.52, 0);
  avatarRoot.add(headGroup);

  // Skull Cube
  const skull = createBox(headGroup, 0, 0.28, 0, 1.1, 1.08, 0.96, skinColor);
  skull.userData = { hotspot: 'head', label: 'Head: Open Education & Qualifications' };

  // Ears
  createBox(headGroup, -0.6, 0.25, 0, 0.12, 0.26, 0.22, skinColor);
  createBox(headGroup, 0.6, 0.25, 0, 0.12, 0.26, 0.22, skinColor);

  // Eyes (Interactive Ocular Hotspot)
  const eyesGroup = new THREE.Group();
  eyesGroup.position.set(0, 0.32, 0.49);
  headGroup.add(eyesGroup);

  // Eyebrows
  createBox(eyesGroup, -0.25, 0.09, 0.01, 0.22, 0.065, 0.03, 0x1f1b24);
  createBox(eyesGroup, 0.25, 0.09, 0.01, 0.22, 0.065, 0.03, 0x1f1b24);

  // Eye whites and pupils
  const eyeL = createBox(eyesGroup, -0.25, 0, 0.01, 0.2, 0.12, 0.03, 0x1f1b24);
  const eyeR = createBox(eyesGroup, 0.25, 0, 0.01, 0.2, 0.12, 0.03, 0x1f1b24);
  eyeL.userData = { hotspot: 'eyes', label: 'Eyes: Launch Camera Interface' };
  eyeR.userData = { hotspot: 'eyes', label: 'Eyes: Launch Camera Interface' };

  // Catchlight reflections in eyes
  createBox(eyesGroup, -0.22, 0.02, 0.03, 0.05, 0.06, 0.02, 0xffffff);
  createBox(eyesGroup, 0.27, 0.02, 0.03, 0.05, 0.06, 0.02, 0xffffff);

  // Nose Block
  createBox(headGroup, 0, 0.2, 0.51, 0.14, 0.14, 0.06, skinColor);

  // Mouth (Interactive Hotspot: "Hi, I am Mritunjay")
  const mouth = createBox(headGroup, 0, 0.04, 0.5, 0.24, 0.055, 0.03, 0x6b3f36);
  mouth.userData = { hotspot: 'mouth', label: 'Mouth: Speak "Hi, I am Mritunjay"' };

  // Textured Wavy Hair (inspired by Mritunjay's portrait)
  const hairGroup = new THREE.Group();
  headGroup.add(hairGroup);

  // Main hair cap on top, back and sides
  createBox(hairGroup, 0, 0.82, -0.03, 1.18, 0.36, 1.05, hairColor);
  createBox(hairGroup, 0, 0.32, -0.48, 1.16, 0.76, 0.22, hairColor);

  // Layered wavy curls / bangs framing the face
  const curlOffsets = [
    [-0.5, 0.72, 0.24, 0.3, 0.28, 0.28],
    [-0.28, 0.76, 0.36, 0.32, 0.26, 0.26],
    [-0.02, 0.74, 0.38, 0.34, 0.28, 0.26],
    [0.26, 0.73, 0.34, 0.32, 0.26, 0.26],
    [0.48, 0.68, 0.26, 0.3, 0.28, 0.28],
    [-0.45, 0.52, 0.35, 0.26, 0.26, 0.28],
    [-0.14, 0.58, 0.44, 0.28, 0.24, 0.24],
    [0.18, 0.57, 0.44, 0.28, 0.24, 0.24],
    [0.44, 0.51, 0.36, 0.26, 0.26, 0.28]
  ];
  curlOffsets.forEach(([x, y, z, sx, sy, sz]) => {
    createBox(hairGroup, x, y, z, sx, sy, sz, hairColor);
  });

  // --- 3. Arms & Hands ---
  // Left Arm
  const armL = createBox(avatarRoot, -0.82, -0.48, 0, 0.36, 1.08, 0.44, suitColor);
  armL.rotation.z = -0.12;
  createBox(armL, 0, -0.56, 0.02, 0.32, 0.28, 0.4, skinColor);

  // Right Arm (Interactive: Waves hello on click!)
  const armRGroup = new THREE.Group();
  armRGroup.position.set(0.82, 0.05, 0);
  avatarRoot.add(armRGroup);

  const armRSleeve = createBox(armRGroup, 0, -0.53, 0, 0.36, 1.08, 0.44, suitColor);
  armRSleeve.rotation.z = 0.12;

  const handR = createBox(armRSleeve, 0, -0.56, 0.02, 0.32, 0.28, 0.4, skinColor);
  handR.userData = { hotspot: 'hand', label: 'Right Hand: Wave Hello!' };
  armRSleeve.userData = { hotspot: 'hand', label: 'Right Hand: Wave Hello!' };

  // --- 4. Legs & Footwear ---
  const pantsMatColor = suitColor;
  createBox(avatarRoot, -0.31, -1.42, 0, 0.44, 1.02, 0.46, pantsMatColor);
  createBox(avatarRoot, 0.31, -1.42, 0, 0.44, 1.02, 0.46, pantsMatColor);

  // Shoes: Formal or Cyber Sneakers
  const shoeL = createBox(avatarRoot, -0.31, -1.94, 0.12, 0.48, 0.26, 0.62, shoeColor);
  const shoeR = createBox(avatarRoot, 0.31, -1.94, 0.12, 0.48, 0.26, 0.62, shoeColor);

  // Green sneaker accents (matches character sheet)
  const sneakerGreenL = createBox(shoeL, 0, -0.02, 0.22, 0.482, 0.08, 0.2, neonGreenColor);
  const sneakerGreenR = createBox(shoeR, 0, -0.02, 0.22, 0.482, 0.08, 0.2, neonGreenColor);

  // --- 5. Floating Pedestal Island ---
  const islandGroup = new THREE.Group();
  scene.add(islandGroup);

  for (let i = 0; i < 8; i++) {
    const angle = (i * Math.PI) / 4;
    const block = createBox(
      islandGroup,
      Math.cos(angle) * 1.25,
      -2.45 + Math.sin(i * 2) * 0.06,
      Math.sin(angle) * 0.72,
      0.82, 0.32, 0.72,
      i % 2 === 0 ? 0x0f172a : 0x1e1b4b
    );
    block.rotation.y = angle;
  }
  createBox(islandGroup, 0, -2.62, 0, 1.85, 0.32, 1.45, 0x090d16);

  // Glowing cyber energy crystals on island
  for (let i = 0; i < 7; i++) {
    const crystal = createBox(
      islandGroup,
      Math.sin(i * 2.4) * 1.35,
      -2.22 + (i % 2) * 0.18,
      Math.cos(i * 1.7) * 0.72,
      0.14, 0.24, 0.14,
      purpleTieColor,
      { emissive: 0x8b5cf6, emissiveIntensity: 2.2 }
    );
    crystal.rotation.y = i;
  }

  // --- 6. Orbiting Skill Particles & Glyphs ---
  const orbGroup = new THREE.Group();
  scene.add(orbGroup);
  const skillLabels = ['JS', 'PYTHON', 'C++', 'ARDUINO', 'IoT', '3D'];
  const orbs = [];

  skillLabels.forEach((label, i) => {
    const orbMat = new THREE.MeshStandardMaterial({
      color: [0x38bdf8, 0x818cf8, 0xa855f7, 0x10b981, 0x3b82f6, 0xc084fc][i],
      metalness: 0.4,
      roughness: 0.2,
      emissive: [0x0284c7, 0x4f46e5, 0x7c3aed, 0x059669, 0x1d4ed8, 0x9333ea][i],
      emissiveIntensity: 0.9
    });
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.24, 2), orbMat);
    const angle = (i / skillLabels.length) * Math.PI * 2;
    orb.position.set(Math.cos(angle) * 2.4, Math.sin(angle * 1.5) * 0.75 + 0.2, Math.sin(angle) * 0.65 - 0.2);
    orb.userData = { base: orb.position.clone(), label };
    orbGroup.add(orb);
    orbs.push(orb);
  });

  // Background Starfield Particles
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 240; i++) {
    starPos.push((Math.random() - 0.5) * 9, (Math.random() - 0.5) * 7, (Math.random() - 0.5) * 5 - 1);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({ color: 0x818cf8, size: 0.022, transparent: true, opacity: 0.65 })));

  // --- 7. Raycasting & Hotspot Interactions ---
  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2(100, 100);
  const interactiveHotspots = [skull, eyeL, eyeR, mouth, torsoBase, handR, armRSleeve];

  function waveHand() {
    gsap.killTweensOf(armRGroup.rotation);
    gsap.to(armRGroup.rotation, {
      z: -1.15,
      x: 0.2,
      duration: 0.3,
      yoyo: true,
      repeat: 5,
      ease: 'sine.inOut',
      onComplete: () => {
        gsap.to(armRGroup.rotation, { z: 0, x: 0, duration: 0.4 });
      }
    });
  }

  function handleAction(action) {
    if (action === 'head') {
      const eduCard = document.getElementById('education-card') || document.getElementById('about');
      if (eduCard) eduCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      showToast('Education Profile: Class 10 student developing coding & electronics builds.');
    } else if (action === 'eyes') {
      openCameraModal();
    } else if (action === 'mouth') {
      speakHello(() => {
        // Subtle mouth bob
        gsap.to(mouth.scale, { y: 1.8, duration: 0.15, yoyo: true, repeat: 7 });
      });
    } else if (action === 'hand') {
      waveHand();
      showToast('Mritunjay waves hello! 👋');
    } else if (action === 'chest') {
      const contactSec = document.getElementById('contact');
      if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
      showToast('Contact Section Opened: Connect via GitHub, LinkedIn, or Email.');
    }
  }

  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  canvas.addEventListener('pointerdown', (e) => {
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactiveHotspots, true);

    if (hits.length > 0) {
      let targetObj = hits[0].object;
      while (targetObj && !targetObj.userData?.hotspot && targetObj.parent) {
        targetObj = targetObj.parent;
      }
      if (targetObj && targetObj.userData?.hotspot) {
        handleAction(targetObj.userData.hotspot);
      }
    }
  });

  // Outfit Switcher
  let currentOutfit = 'hoodie';
  function setOutfit(type) {
    currentOutfit = type;
    if (type === 'hoodie') {
      suitGroup.visible = false;
      hoodieGroup.visible = true;
      torsoBase.material.color.setHex(0x0f172a); // Charcoal black hoodie
      sneakerGreenL.visible = true;
      sneakerGreenR.visible = true;
    } else {
      suitGroup.visible = true;
      hoodieGroup.visible = false;
      torsoBase.material.color.setHex(suitColor); // Formal black suit
      sneakerGreenL.visible = false;
      sneakerGreenR.visible = false;
    }
  }
  setOutfit('hoodie');

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

    // Natural Head & Gaze cursor tracking with lerp damping
    headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, pointer.x * 0.48, 0.06);
    headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, -pointer.y * 0.22, 0.06);

    // Subtle breathing & idle float
    avatarRoot.position.y = Math.sin(t * 1.5) * 0.06;
    avatarRoot.rotation.y = THREE.MathUtils.lerp(avatarRoot.rotation.y, pointer.x * 0.08, 0.03);

    // Orbiting skill spheres
    orbs.forEach((orb, i) => {
      orb.position.y = orb.userData.base.y + Math.sin(t * 1.3 + i) * 0.12;
      orb.position.x = THREE.MathUtils.lerp(orb.position.x, orb.userData.base.x + pointer.x * 0.14, 0.03);
      orb.rotation.x = t * 0.3;
      orb.rotation.y = t * 0.45;
    });

    islandGroup.rotation.y = Math.sin(t * 0.4) * 0.05;

    // Check hover for cursor & tooltip
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObjects(interactiveHotspots, true);

    if (hits.length > 0) {
      canvas.style.cursor = 'pointer';
      let obj = hits[0].object;
      while (obj && !obj.userData?.label && obj.parent) {
        obj = obj.parent;
      }
      if (tooltipEl && obj?.userData?.label) {
        tooltipEl.textContent = obj.userData.label;
        tooltipEl.classList.add('visible');
      }
    } else {
      canvas.style.cursor = 'default';
      if (tooltipEl) tooltipEl.classList.remove('visible');
    }

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    waveHand,
    handleAction,
    setOutfit,
    getOutfit: () => currentOutfit,
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      renderer.dispose();
    }
  };
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}
