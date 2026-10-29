import * as THREE from 'three';

/**
 * Smart Helmet Detection Scene
 * 3D motorcycle / helmet model, computer vision bounding box tracker,
 * confidence score calculation, and vehicle ignition interlock relay simulation.
 */
export function initHelmetScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.helmet-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.helmet-container *, .helmet-container *::before, .helmet-container *::after { box-sizing: border-box; }.helmet-container [class$="-hud-header"], .helmet-container .radar-hud-bar, .helmet-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.helmet-container [class$="-badge"], .helmet-container .radar-status-badge, .helmet-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.helmet-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.helmet-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.helmet-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.helmet-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.helmet-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.helmet-container [class$="-viewport-wrapper"], .helmet-container .radar-display-wrapper, .helmet-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.helmet-container [class$="-viewport-wrapper"]::before, .helmet-container .radar-display-wrapper::before, .helmet-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.helmet-container [class$="-viewport-wrapper"] canvas, .helmet-container #radar-canvas, .helmet-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.helmet-container [class$="-telemetry-hud"], .helmet-container .radar-overlay-hud, .helmet-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.helmet-container [class$="-telemetry-card"], .helmet-container [class$="-metric-card"], .helmet-container .face-telemetry-hud, .helmet-container .nfc-payload-card, .helmet-container .voice-transcript-box, .helmet-container .voice-response-box, .helmet-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.helmet-container [class$="-telemetry-card"] span, .helmet-container [class$="-metric-card"] span, .helmet-container .hud-telemetry-corner span, .helmet-container .face-hud-row span, .helmet-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.helmet-container [class$="-telemetry-card"] strong, .helmet-container [class$="-metric-card"] strong, .helmet-container .face-hud-row strong, .helmet-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.helmet-container [class$="-controls-dock"], .helmet-container [class$="-slider-dock"], .helmet-container .radar-control-panel, .helmet-container .radar-controls-dock, .helmet-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.helmet-container .hud-pill-btn, .helmet-container .btn, .helmet-container .command-chip, .helmet-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.helmet-container .hud-pill-btn, .helmet-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.helmet-container .btn.primary, .helmet-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.helmet-container .btn.ghost, .helmet-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.helmet-container .hud-pill-btn:hover, .helmet-container .command-chip:hover, .helmet-container .btn:hover, .helmet-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.helmet-container button:focus-visible, .helmet-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.helmet-container .safe, .helmet-container .indicator-safe { color: #86efac !important; }.helmet-container .badge-warning, .helmet-container .indicator-warn { color: #fcd34d !important; }.helmet-container .indicator-hazard { color: #fca5a5 !important; }.helmet-container p, .helmet-container .dock-hint, .helmet-container .nfc-disclaimer, .helmet-container .helmet-disclaimer, .helmet-container .fp-disclaimer, .helmet-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.helmet-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.helmet-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.helmet-container [class$="-hud-header"], .helmet-container .radar-hud-bar, .helmet-container .face-hud-header { align-items: flex-start; padding: 12px; }.helmet-container [class$="-viewport-wrapper"], .helmet-container .radar-display-wrapper, .helmet-container .voice-visualizer-wrapper { min-height: 240px; }.helmet-container [class$="-controls-dock"], .helmet-container [class$="-slider-dock"], .helmet-container .radar-control-panel, .helmet-container .voice-command-dock { padding: 12px; }.helmet-container [class$="-telemetry-hud"] { inset: 8px; }.helmet-container [class$="-badge"], .helmet-container .radar-status-badge, .helmet-container .face-badge { font-size: 9px; }
}.helmet-container .helmet-relay-status { padding:7px 10px; border:1px solid rgba(248,113,113,.3); border-radius:8px; background:rgba(127,29,29,.16); color:#fca5a5; font:600 10px ui-monospace,monospace; }.helmet-container .helmet-telemetry-hud { position:absolute; left:12px; bottom:12px; width:min(260px,58%); display:grid; gap:7px; }.helmet-container .cv-bounding-box { position:absolute; z-index:2; inset:18% 25%; border:1px solid #67e8f9; box-shadow:0 0 20px rgba(103,232,249,.12); pointer-events:none; }.helmet-container .cv-tag { position:absolute; left:-1px; top:-25px; display:flex; gap:12px; padding:5px 8px; background:#083344; color:#a5f3fc; font:600 10px ui-monospace,monospace; }.helmet-container .cv-bracket { position:absolute; width:15px; height:15px; border-color:#67e8f9; border-style:solid; }.helmet-container .cv-bracket.top-left { top:-1px; left:-1px; border-width:2px 0 0 2px; }.helmet-container .cv-bracket.top-right { top:-1px; right:-1px; border-width:2px 2px 0 0; }.helmet-container .cv-bracket.bottom-left { bottom:-1px; left:-1px; border-width:0 0 2px 2px; }.helmet-container .cv-bracket.bottom-right { bottom:-1px; right:-1px; border-width:0 2px 2px 0; }
`;
  if (!container.querySelector('style[data-scene-style="HelmetScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'HelmetScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="helmet-container">
      <div class="helmet-hud-header">
        <div class="helmet-badge">
          <span class="hud-blink-dot cyan" id="helmet-hud-dot"></span>
          <span>CV VISION PIPELINE • SAFETY INTERLOCK RELAY</span>
        </div>
        <div class="helmet-relay-status" id="helmet-relay-pill">
          IGNITION: LOCKED (NO HELMET)
        </div>
      </div>

      <div class="helmet-viewport-wrapper">
        <canvas id="helmet-canvas"></canvas>
        <div class="cv-bounding-box" id="helmet-bbox">
          <div class="cv-tag">
            <span id="cv-class-label">CLASS: HELMET</span>
            <span id="cv-conf-label">CONF: 98.4%</span>
          </div>
          <div class="cv-bracket top-left"></div>
          <div class="cv-bracket top-right"></div>
          <div class="cv-bracket bottom-left"></div>
          <div class="cv-bracket bottom-right"></div>
        </div>

        <div class="helmet-telemetry-hud">
          <div class="helmet-telemetry-card">
            <span>VISION MODEL:</span>
            <strong>YOLO-v8n (Headgear Classifier)</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>INFERENCE TIME:</span>
            <strong>14.2 ms / Frame</strong>
          </div>
          <div class="helmet-telemetry-card">
            <span>IGNITION SOLENOID:</span>
            <strong id="helmet-solenoid-status" class="locked">DE-ENERGIZED (OPEN)</strong>
          </div>
        </div>
      </div>

      <div class="helmet-controls-dock">
        <div class="dock-actions">
          <button class="btn primary small" id="helmet-toggle-btn">Toggle Rider Helmet: WEAR HELMET</button>
          <button class="btn ghost small" id="helmet-ignition-btn">Simulate Ignition Key Press</button>
        </div>
        <p class="helmet-disclaimer">
          ⚠️ <strong>Interlock Logic:</strong> The motorcycle electric starter motor relay only energizes when a certified helmet is detected with &gt; 90% model confidence.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#helmet-canvas');
  const bbox = container.querySelector('#helmet-bbox');
  const classLabel = container.querySelector('#cv-class-label');
  const confLabel = container.querySelector('#cv-conf-label');
  const relayPill = container.querySelector('#helmet-relay-pill');
  const solenoidStatus = container.querySelector('#helmet-solenoid-status');
  const toggleBtn = container.querySelector('#helmet-toggle-btn');
  const ignitionBtn = container.querySelector('#helmet-ignition-btn');
  const hudDot = container.querySelector('#helmet-hud-dot');

  let hasHelmet = false;
  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05070e);

  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 1.2, 5.5);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));

  // Lights
  scene.add(new THREE.AmbientLight(0x7da4d4, 1.3));
  const dirLight = new THREE.DirectionalLight(0xffffff, 2.5);
  dirLight.position.set(4, 5, 4);
  scene.add(dirLight);

  const neonRim = new THREE.PointLight(0x38bdf8, 3, 10);
  neonRim.position.set(-3, 2, -2);
  scene.add(neonRim);

  const sceneGroup = new THREE.Group();
  scene.add(sceneGroup);

  // Procedural Motorcycle & Rider Base
  // 1. Rider Head / Neck
  const skinMat = new THREE.MeshStandardMaterial({ color: 0xcaa182, roughness: 0.6 });
  const headMesh = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 24), skinMat);
  headMesh.position.set(0, 0.6, 0);
  sceneGroup.add(headMesh);

  // Hair
  const hairMat = new THREE.MeshStandardMaterial({ color: 0x17151b, roughness: 0.9 });
  const hairMesh = new THREE.Mesh(new THREE.SphereGeometry(0.58, 24, 16, 0, Math.PI * 2, 0, Math.PI / 1.7), hairMat);
  hairMesh.position.set(0, 0.65, 0);
  sceneGroup.add(hairMesh);

  // Torso / Jacket
  const jacketMat = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.7 });
  const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.6, 1.2, 24), jacketMat);
  torso.position.set(0, -0.6, 0);
  sceneGroup.add(torso);

  // 2. Helmet (which can be toggled visible/invisible or positioned over head)
  const helmetGroup = new THREE.Group();
  helmetGroup.position.set(0, 0.65, 0);
  sceneGroup.add(helmetGroup);

  const helmetShellMat = new THREE.MeshStandardMaterial({
    color: 0x0284c7, // Glossy aero cyan/blue
    metalness: 0.5,
    roughness: 0.2
  });
  const helmetShell = new THREE.Mesh(new THREE.SphereGeometry(0.68, 32, 24), helmetShellMat);
  helmetGroup.add(helmetShell);

  // Visor (tinted black with reflection)
  const visorMat = new THREE.MeshStandardMaterial({
    color: 0x09090b,
    metalness: 0.9,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  const visor = new THREE.Mesh(new THREE.SphereGeometry(0.7, 24, 16, Math.PI * 0.7, Math.PI * 0.6, Math.PI * 0.25, Math.PI * 0.45), visorMat);
  helmetGroup.add(visor);

  // Handlebars / Motorcycle windshield hint
  const shieldMat = new THREE.MeshStandardMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.35, roughness: 0.1 });
  const shield = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.9, 0.05), shieldMat);
  shield.position.set(0, -0.2, 1.2);
  shield.rotation.x = -0.3;
  sceneGroup.add(shield);

  // Update Helmet State
  function setHelmetState(wear) {
    hasHelmet = wear;
    helmetGroup.visible = hasHelmet;

    if (hasHelmet) {
      toggleBtn.textContent = 'Toggle Rider: REMOVE HELMET';
      bbox.classList.add('visible');
      classLabel.textContent = 'CLASS: APPROVED HELMET';
      confLabel.textContent = 'CONF: 98.6%';
      relayPill.textContent = 'IGNITION: READY (INTERLOCK CLOSED)';
      relayPill.className = 'helmet-relay-status ready';
      solenoidStatus.textContent = 'ENERGIZED (CLOSED)';
      solenoidStatus.className = 'ready';
      hudDot.className = 'hud-blink-dot green';
    } else {
      toggleBtn.textContent = 'Toggle Rider: WEAR HELMET';
      bbox.classList.remove('visible');
      classLabel.textContent = 'CLASS: NO HELMET';
      confLabel.textContent = 'CONF: 94.1%';
      relayPill.textContent = 'IGNITION: LOCKED (NO HELMET)';
      relayPill.className = 'helmet-relay-status locked';
      solenoidStatus.textContent = 'DE-ENERGIZED (OPEN)';
      solenoidStatus.className = 'locked';
      hudDot.className = 'hud-blink-dot red';
    }
  }

  setHelmetState(false);

  toggleBtn.addEventListener('click', () => {
    setHelmetState(!hasHelmet);
  });

  ignitionBtn.addEventListener('click', () => {
    if (hasHelmet) {
      alert('✓ Ignition Sequence Initiated! Relay clicked closed. Engine started safely.');
    } else {
      alert('❌ Ignition Blocked! Helmet not detected. Wear a protective helmet to start engine.');
    }
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

  // Pointer drag for viewing angle
  let isDown = false, px = 0;
  canvas.addEventListener('pointerdown', (e) => { isDown = true; px = e.clientX; });
  window.addEventListener('pointermove', (e) => {
    if (isDown) {
      sceneGroup.rotation.y += (e.clientX - px) * 0.008;
      px = e.clientX;
    }
  });
  window.addEventListener('pointerup', () => { isDown = false; });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();

    if (!isDown) {
      sceneGroup.rotation.y = Math.sin(elapsed * 0.6) * 0.15;
    }

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
