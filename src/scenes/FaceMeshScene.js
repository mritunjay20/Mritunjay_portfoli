import * as THREE from 'three';

/**
 * 3D Face & Landmark Tracker Scene
 * Rotating 3D human head geometry, wireframe triangulation,
 * glowing facial landmark point cloud, and real-time telemetry HUD.
 */
export function initFaceMeshScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.face-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.face-container *, .face-container *::before, .face-container *::after { box-sizing: border-box; }.face-container [class$="-hud-header"], .face-container .radar-hud-bar, .face-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.face-container [class$="-badge"], .face-container .radar-status-badge, .face-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.face-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.face-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.face-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.face-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.face-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.face-container [class$="-viewport-wrapper"], .face-container .radar-display-wrapper, .face-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.face-container [class$="-viewport-wrapper"]::before, .face-container .radar-display-wrapper::before, .face-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.face-container [class$="-viewport-wrapper"] canvas, .face-container #radar-canvas, .face-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.face-container [class$="-telemetry-hud"], .face-container .radar-overlay-hud, .face-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.face-container [class$="-telemetry-card"], .face-container [class$="-metric-card"], .face-container .face-telemetry-hud, .face-container .nfc-payload-card, .face-container .voice-transcript-box, .face-container .voice-response-box, .face-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.face-container [class$="-telemetry-card"] span, .face-container [class$="-metric-card"] span, .face-container .hud-telemetry-corner span, .face-container .face-hud-row span, .face-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.face-container [class$="-telemetry-card"] strong, .face-container [class$="-metric-card"] strong, .face-container .face-hud-row strong, .face-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.face-container [class$="-controls-dock"], .face-container [class$="-slider-dock"], .face-container .radar-control-panel, .face-container .radar-controls-dock, .face-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.face-container .hud-pill-btn, .face-container .btn, .face-container .command-chip, .face-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.face-container .hud-pill-btn, .face-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.face-container .btn.primary, .face-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.face-container .btn.ghost, .face-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.face-container .hud-pill-btn:hover, .face-container .command-chip:hover, .face-container .btn:hover, .face-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.face-container button:focus-visible, .face-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.face-container .safe, .face-container .indicator-safe { color: #86efac !important; }.face-container .badge-warning, .face-container .indicator-warn { color: #fcd34d !important; }.face-container .indicator-hazard { color: #fca5a5 !important; }.face-container p, .face-container .dock-hint, .face-container .nfc-disclaimer, .face-container .helmet-disclaimer, .face-container .fp-disclaimer, .face-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.face-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.face-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.face-container [class$="-hud-header"], .face-container .radar-hud-bar, .face-container .face-hud-header { align-items: flex-start; padding: 12px; }.face-container [class$="-viewport-wrapper"], .face-container .radar-display-wrapper, .face-container .voice-visualizer-wrapper { min-height: 240px; }.face-container [class$="-controls-dock"], .face-container [class$="-slider-dock"], .face-container .radar-control-panel, .face-container .voice-command-dock { padding: 12px; }.face-container [class$="-telemetry-hud"] { inset: 8px; }.face-container [class$="-badge"], .face-container .radar-status-badge, .face-container .face-badge { font-size: 9px; }
}.face-container .face-telemetry-hud { position:absolute; right:12px; top:12px; width:min(250px,48%); display:grid; gap:8px; }.face-container .face-hud-row { display:flex; flex-direction:column; gap:3px; }.face-container .face-mode-controls { display:flex; flex-wrap:wrap; gap:8px; }.face-container .face-controls-dock { justify-content:space-between; }
`;
  if (!container.querySelector('style[data-scene-style="FaceMeshScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'FaceMeshScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="face-container">
      <div class="face-hud-header">
        <div class="face-badge">
          <span class="hud-blink-dot purple"></span>
          <span>3D FACIAL GEOMETRY • 468 LANDMARK MESH</span>
        </div>
        <div class="face-mode-controls">
          <button class="hud-pill-btn active" id="face-wireframe-toggle">Mode: Triangulation</button>
          <button class="hud-pill-btn" id="face-pointcloud-toggle">Landmark Nodes: ON</button>
        </div>
      </div>

      <div class="face-viewport-wrapper">
        <canvas id="face-canvas"></canvas>
        <div class="face-telemetry-hud">
          <div class="face-hud-row">
            <span>POSE ESTIMATION:</span>
            <strong id="face-pitch-val">PITCH: 0.0° • YAW: 0.0°</strong>
          </div>
          <div class="face-hud-row">
            <span>KEYPOINT DENSITY:</span>
            <span>468 Topological Vertices</span>
          </div>
          <div class="face-hud-row">
            <span>DEPTH RECONSTRUCTION:</span>
            <span class="safe">Monocular Depth (Active)</span>
          </div>
          <div class="face-hud-row">
            <span>LATENCY:</span>
            <span>8.4 ms (WebGL Accelerated)</span>
          </div>
        </div>
      </div>

      <div class="face-controls-dock">
        <span class="dock-hint">Interact: Move cursor or drag across viewport to dynamically steer facial pose tracking.</span>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#face-canvas');
  const pitchVal = container.querySelector('#face-pitch-val');
  const wireframeToggle = container.querySelector('#face-wireframe-toggle');
  const pointcloudToggle = container.querySelector('#face-pointcloud-toggle');

  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060d);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 0, 5.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x818cf8, 1.2));
  const frontLight = new THREE.DirectionalLight(0xc084fc, 2.5);
  frontLight.position.set(0, 3, 5);
  scene.add(frontLight);

  const cyanRim = new THREE.PointLight(0x38bdf8, 3, 10);
  cyanRim.position.set(-3, -2, 2);
  scene.add(cyanRim);

  const headGroup = new THREE.Group();
  scene.add(headGroup);

  // 1. Procedural 3D Head Mesh (Icosahedron deformed into anatomical head proportions)
  const baseGeo = new THREE.IcosahedronGeometry(1.6, 4);
  const pos = baseGeo.attributes.position;

  // Sculpt vertices to match face/jaw/cranial taper
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    // Taper chin
    if (y < -0.4) {
      x *= (1 + y * 0.35);
      z *= (1 + y * 0.2);
    }
    // Deepen eye sockets and nasal bridge
    if (z > 0.8 && y > 0 && y < 0.6) {
      if (Math.abs(x) < 0.22) {
        z += 0.35; // Nose bridge protrusion
      } else if (Math.abs(x) < 0.7) {
        z -= 0.15; // Eye orbit depression
      }
    }

    pos.setXYZ(i, x, y, z);
  }
  baseGeo.computeVertexNormals();

  // Solid dark inner core
  const innerMat = new THREE.MeshStandardMaterial({
    color: 0x090a14,
    roughness: 0.8,
    metalness: 0.2
  });
  const innerMesh = new THREE.Mesh(baseGeo, innerMat);
  headGroup.add(innerMesh);

  // Wireframe glowing exoskeleton
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    wireframe: true,
    transparent: true,
    opacity: 0.65
  });
  const wireMesh = new THREE.Mesh(baseGeo, wireMat);
  headGroup.add(wireMesh);

  // Landmark Point Cloud
  const pointMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.055,
    transparent: true,
    opacity: 0.85
  });
  const pointCloud = new THREE.Points(baseGeo, pointMat);
  headGroup.add(pointCloud);

  // Toggles
  let isWireframeOnly = false;
  wireframeToggle.addEventListener('click', () => {
    isWireframeOnly = !isWireframeOnly;
    innerMesh.visible = !isWireframeOnly;
    wireframeToggle.classList.toggle('active', !isWireframeOnly);
  });

  let showPoints = true;
  pointcloudToggle.addEventListener('click', () => {
    showPoints = !showPoints;
    pointCloud.visible = showPoints;
    pointcloudToggle.classList.toggle('active', showPoints);
  });

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    const w = rect.width;
    const h = Math.max(340, rect.height || 420);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }

  resize();
  window.addEventListener('resize', resize);

  // Cursor tracking for face pose
  let mouseX = 0, mouseY = 0;
  canvas.addEventListener('pointermove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    const targetRotY = mouseX * 0.75 + Math.sin(elapsed * 0.5) * 0.1;
    const targetRotX = -mouseY * 0.5;

    headGroup.rotation.y = THREE.MathUtils.lerp(headGroup.rotation.y, targetRotY, 0.06);
    headGroup.rotation.x = THREE.MathUtils.lerp(headGroup.rotation.x, targetRotX, 0.06);

    const degPitch = (headGroup.rotation.x * (180 / Math.PI)).toFixed(1);
    const degYaw = (headGroup.rotation.y * (180 / Math.PI)).toFixed(1);
    pitchVal.textContent = `PITCH: ${degPitch}° • YAW: ${degYaw}°`;

    renderer.render(scene, camera);
  }

  animId = requestAnimationFrame(animate);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      renderer.dispose();
    }
  };
}
