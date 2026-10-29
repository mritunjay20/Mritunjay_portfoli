import * as THREE from 'three';

/**
 * Smart Agriculture 3D Scene
 * Crop rows, soil bed, irrigation pipes, animated water flow,
 * rain particles, servo-deployed canopy, and live telemetry dashboard.
 */
export function initAgricultureScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.agri-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.agri-container *, .agri-container *::before, .agri-container *::after { box-sizing: border-box; }.agri-container [class$="-hud-header"], .agri-container .radar-hud-bar, .agri-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.agri-container [class$="-badge"], .agri-container .radar-status-badge, .agri-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.agri-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.agri-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.agri-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.agri-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.agri-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.agri-container [class$="-viewport-wrapper"], .agri-container .radar-display-wrapper, .agri-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.agri-container [class$="-viewport-wrapper"]::before, .agri-container .radar-display-wrapper::before, .agri-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.agri-container [class$="-viewport-wrapper"] canvas, .agri-container #radar-canvas, .agri-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.agri-container [class$="-telemetry-hud"], .agri-container .radar-overlay-hud, .agri-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.agri-container [class$="-telemetry-card"], .agri-container [class$="-metric-card"], .agri-container .face-telemetry-hud, .agri-container .nfc-payload-card, .agri-container .voice-transcript-box, .agri-container .voice-response-box, .agri-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.agri-container [class$="-telemetry-card"] span, .agri-container [class$="-metric-card"] span, .agri-container .hud-telemetry-corner span, .agri-container .face-hud-row span, .agri-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.agri-container [class$="-telemetry-card"] strong, .agri-container [class$="-metric-card"] strong, .agri-container .face-hud-row strong, .agri-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.agri-container [class$="-controls-dock"], .agri-container [class$="-slider-dock"], .agri-container .radar-control-panel, .agri-container .radar-controls-dock, .agri-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.agri-container .hud-pill-btn, .agri-container .btn, .agri-container .command-chip, .agri-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.agri-container .hud-pill-btn, .agri-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.agri-container .btn.primary, .agri-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.agri-container .btn.ghost, .agri-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.agri-container .hud-pill-btn:hover, .agri-container .command-chip:hover, .agri-container .btn:hover, .agri-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.agri-container button:focus-visible, .agri-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.agri-container .safe, .agri-container .indicator-safe { color: #86efac !important; }.agri-container .badge-warning, .agri-container .indicator-warn { color: #fcd34d !important; }.agri-container .indicator-hazard { color: #fca5a5 !important; }.agri-container p, .agri-container .dock-hint, .agri-container .nfc-disclaimer, .agri-container .helmet-disclaimer, .agri-container .fp-disclaimer, .agri-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.agri-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.agri-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.agri-container [class$="-hud-header"], .agri-container .radar-hud-bar, .agri-container .face-hud-header { align-items: flex-start; padding: 12px; }.agri-container [class$="-viewport-wrapper"], .agri-container .radar-display-wrapper, .agri-container .voice-visualizer-wrapper { min-height: 240px; }.agri-container [class$="-controls-dock"], .agri-container [class$="-slider-dock"], .agri-container .radar-control-panel, .agri-container .voice-command-dock { padding: 12px; }.agri-container [class$="-telemetry-hud"] { inset: 8px; }.agri-container [class$="-badge"], .agri-container .radar-status-badge, .agri-container .face-badge { font-size: 9px; }
}.agri-container .agri-telemetry-hud { position:absolute; top:12px; right:12px; width:min(270px,48%); display:grid; gap:8px; align-content:start; }.agri-container .agri-metric-card { padding:10px 12px; }.agri-container .metric-value-row { display:flex; flex-wrap:wrap; justify-content:space-between; align-items:center; gap:5px; margin-top:4px; }.agri-container .metric-progress-bar { height:4px; margin-top:8px; overflow:hidden; border-radius:99px; background:rgba(148,163,184,.15); }.agri-container .metric-progress-bar > div { height:100%; background:linear-gradient(90deg,#4ade80,#bef264); box-shadow:0 0 12px rgba(134,239,172,.4); }.agri-container .agri-controls-row { display:flex; flex-wrap:wrap; gap:7px; }
`;
  if (!container.querySelector('style[data-scene-style="AgricultureScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'AgricultureScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="agri-container">
      <div class="agri-hud-header">
        <div class="agri-badge">
          <span class="hud-blink-dot green"></span>
          <span>MICROCLIMATE SIMULATION • CLOSED-LOOP AUTOMATION</span>
        </div>
        <div class="agri-controls-row">
          <button class="hud-pill-btn" id="agri-rain-btn">Trigger Rain: OFF</button>
          <button class="hud-pill-btn" id="agri-pump-btn">Pump Relay: AUTO</button>
          <button class="hud-pill-btn" id="agri-canopy-btn">Canopy: AUTO</button>
        </div>
      </div>

      <div class="agri-viewport-wrapper">
        <canvas id="agri-canvas"></canvas>
        <div class="agri-telemetry-hud">
          <div class="agri-metric-card">
            <span class="metric-label">SOIL MOISTURE</span>
            <div class="metric-value-row">
              <strong id="agri-moisture-val">42%</strong>
              <span id="agri-moisture-badge" class="badge-warning">IRRIGATION ON</span>
            </div>
            <div class="metric-progress-bar">
              <div id="agri-moisture-fill" style="width: 42%;"></div>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">ATMOSPHERIC RAIN</span>
            <div class="metric-value-row">
              <strong id="agri-rain-status">NONE</strong>
              <span id="agri-rain-badge" class="badge-safe">DRY SENSOR</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">CANOPY POSITION</span>
            <div class="metric-value-row">
              <strong id="agri-canopy-status">OPEN (0°)</strong>
              <span class="badge-neutral">SERVO MG90S</span>
            </div>
          </div>

          <div class="agri-metric-card">
            <span class="metric-label">SUBMERSIBLE PUMP</span>
            <div class="metric-value-row">
              <strong id="agri-pump-status">RUNNING</strong>
              <span id="agri-pump-badge" class="badge-active">5V RELAY CLOSED</span>
            </div>
          </div>
        </div>
      </div>

      <div class="agri-slider-dock">
        <label for="agri-soil-slider">Manual Moisture Simulation (0% Dry - 100% Saturated):</label>
        <input type="range" id="agri-soil-slider" min="10" max="90" value="42" />
        <small class="agri-dock-hint">Automatic Rule: If Soil &lt; 45% &rarr; Pump turns ON. If Rain &rarr; Canopy closes over crops.</small>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#agri-canvas');
  const moistureVal = container.querySelector('#agri-moisture-val');
  const moistureFill = container.querySelector('#agri-moisture-fill');
  const moistureBadge = container.querySelector('#agri-moisture-badge');
  const rainStatus = container.querySelector('#agri-rain-status');
  const rainBadge = container.querySelector('#agri-rain-badge');
  const canopyStatus = container.querySelector('#agri-canopy-status');
  const pumpStatus = container.querySelector('#agri-pump-status');
  const pumpBadge = container.querySelector('#agri-pump-badge');
  const rainBtn = container.querySelector('#agri-rain-btn');
  const pumpBtn = container.querySelector('#agri-pump-btn');
  const canopyBtn = container.querySelector('#agri-canopy-btn');
  const soilSlider = container.querySelector('#agri-soil-slider');

  let isRaining = false;
  let soilMoisture = 42;
  let isPumpActive = true;
  let canopyAngle = 0; // 0 = open, 1 = closed (folded down)
  let targetCanopyAngle = 0;
  let manualPumpOverride = false;
  let animId = null;

  // Scene setup
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x040810);

  const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
  camera.position.set(0, 4.2, 7.8);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
  renderer.shadowMap.enabled = true;

  // Lighting
  const ambientLight = new THREE.AmbientLight(0x7fb2d9, 1.4);
  scene.add(ambientLight);

  const sunLight = new THREE.DirectionalLight(0xfff4d6, 2.8);
  sunLight.position.set(4, 8, 5);
  sunLight.castShadow = true;
  scene.add(sunLight);

  const purpleRim = new THREE.PointLight(0xa855f7, 3, 14);
  purpleRim.position.set(-5, 3, -3);
  scene.add(purpleRim);

  const farmGroup = new THREE.Group();
  scene.add(farmGroup);

  // 1. Soil Field Bed (dark earth with furrows)
  const soilGeo = new THREE.BoxGeometry(5.2, 0.4, 3.8);
  const soilMat = new THREE.MeshStandardMaterial({ color: 0x241812, roughness: 0.9 });
  const soilBed = new THREE.Mesh(soilGeo, soilMat);
  soilBed.position.y = -0.2;
  soilBed.receiveShadow = true;
  farmGroup.add(soilBed);

  // Raised soil mounds
  for (let z = -1.2; z <= 1.2; z += 0.8) {
    const moundGeo = new THREE.BoxGeometry(4.8, 0.14, 0.55);
    const moundMat = new THREE.MeshStandardMaterial({ color: 0x332016, roughness: 0.95 });
    const mound = new THREE.Mesh(moundGeo, moundMat);
    mound.position.set(0, 0.05, z);
    farmGroup.add(mound);
  }

  // 2. Crop Stalks (procedural voxel wheat/plants)
  const crops = [];
  const cropGeo = new THREE.BoxGeometry(0.08, 0.42, 0.08);
  const leafGeo = new THREE.BoxGeometry(0.24, 0.05, 0.12);

  for (let z = -1.2; z <= 1.2; z += 0.8) {
    for (let x = -2.1; x <= 2.1; x += 0.45) {
      const plantGroup = new THREE.Group();
      plantGroup.position.set(x + (Math.random() - 0.5) * 0.05, 0.22, z + (Math.random() - 0.5) * 0.05);

      const stalkMat = new THREE.MeshStandardMaterial({ color: 0x22c55e, roughness: 0.7 });
      const stalk = new THREE.Mesh(cropGeo, stalkMat);
      stalk.castShadow = true;
      plantGroup.add(stalk);

      const leaf = new THREE.Mesh(leafGeo, stalkMat);
      leaf.position.y = 0.16;
      leaf.rotation.y = Math.random() * Math.PI;
      leaf.rotation.z = 0.2;
      plantGroup.add(leaf);

      farmGroup.add(plantGroup);
      crops.push(plantGroup);
    }
  }

  // 3. Irrigation Water Pipe Network
  const pipeMat = new THREE.MeshStandardMaterial({ color: 0x475569, metalness: 0.6, roughness: 0.3 });
  const mainPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 5.0, 16), pipeMat);
  mainPipe.rotation.z = Math.PI / 2;
  mainPipe.position.set(0, 0.15, -1.65);
  farmGroup.add(mainPipe);

  // Lateral feeder tubes
  for (let x = -1.8; x <= 1.8; x += 1.2) {
    const lateralPipe = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 3.2, 12), pipeMat);
    lateralPipe.rotation.x = Math.PI / 2;
    lateralPipe.position.set(x, 0.14, 0);
    farmGroup.add(lateralPipe);
  }

  // Water pump box
  const pumpMat = new THREE.MeshStandardMaterial({ color: 0x2563eb, metalness: 0.4, roughness: 0.4 });
  const pumpBox = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.4, 0.45), pumpMat);
  pumpBox.position.set(-2.4, 0.2, -1.65);
  farmGroup.add(pumpBox);

  // 4. Animated Water Droplets from pipes
  const waterDropCount = 120;
  const waterGeo = new THREE.BufferGeometry();
  const waterPositions = new Float32Array(waterDropCount * 3);
  const waterVelocities = [];

  for (let i = 0; i < waterDropCount; i++) {
    const rx = (Math.random() - 0.5) * 4.0;
    const rz = (Math.random() - 0.5) * 2.8;
    waterPositions[i * 3] = rx;
    waterPositions[i * 3 + 1] = 0.18;
    waterPositions[i * 3 + 2] = rz;
    waterVelocities.push({ y: 0, active: false });
  }

  waterGeo.setAttribute('position', new THREE.BufferAttribute(waterPositions, 3));
  const waterMat = new THREE.PointsMaterial({
    color: 0x38bdf8,
    size: 0.08,
    transparent: true,
    opacity: 0.85
  });
  const waterPoints = new THREE.Points(waterGeo, waterMat);
  farmGroup.add(waterPoints);

  // 5. Rain Particle System
  const rainCount = 600;
  const rainGeo = new THREE.BufferGeometry();
  const rainPositions = new Float32Array(rainCount * 3);

  for (let i = 0; i < rainCount; i++) {
    rainPositions[i * 3] = (Math.random() - 0.5) * 6;
    rainPositions[i * 3 + 1] = Math.random() * 5 + 1;
    rainPositions[i * 3 + 2] = (Math.random() - 0.5) * 5;
  }

  rainGeo.setAttribute('position', new THREE.BufferAttribute(rainPositions, 3));
  const rainMat = new THREE.PointsMaterial({
    color: 0x93c5fd,
    size: 0.05,
    transparent: true,
    opacity: 0
  });
  const rainPoints = new THREE.Points(rainGeo, rainMat);
  farmGroup.add(rainPoints);

  // 6. Servo Protective Canopy Frame
  const canopyPivot = new THREE.Group();
  canopyPivot.position.set(0, 1.8, 1.7);
  farmGroup.add(canopyPivot);

  const canopyFrameMat = new THREE.MeshStandardMaterial({ color: 0x0284c7, roughness: 0.3, transparent: true, opacity: 0.85 });
  const canopyMesh = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.06, 3.4), canopyFrameMat);
  canopyMesh.position.set(0, 0, -1.7);
  canopyPivot.add(canopyMesh);

  // Interactive Buttons & Slider
  rainBtn.addEventListener('click', () => {
    isRaining = !isRaining;
    rainBtn.textContent = `Trigger Rain: ${isRaining ? 'ON' : 'OFF'}`;
    rainBtn.classList.toggle('active', isRaining);
    updateAutomation();
  });

  pumpBtn.addEventListener('click', () => {
    manualPumpOverride = !manualPumpOverride;
    if (manualPumpOverride) {
      isPumpActive = !isPumpActive;
      pumpBtn.textContent = `Pump: MANUAL (${isPumpActive ? 'ON' : 'OFF'})`;
    } else {
      pumpBtn.textContent = 'Pump Relay: AUTO';
      updateAutomation();
    }
  });

  canopyBtn.addEventListener('click', () => {
    if (targetCanopyAngle === 0) {
      targetCanopyAngle = 0.55;
      canopyBtn.textContent = 'Canopy: DEPLOYED';
    } else {
      targetCanopyAngle = 0;
      canopyBtn.textContent = 'Canopy: OPEN';
    }
  });

  soilSlider.addEventListener('input', (e) => {
    soilMoisture = parseInt(e.target.value, 10);
    updateAutomation();
  });

  function updateAutomation() {
    moistureVal.textContent = `${soilMoisture}%`;
    moistureFill.style.width = `${soilMoisture}%`;

    if (soilMoisture < 45) {
      moistureBadge.textContent = 'IRRIGATION NEEDED';
      moistureBadge.className = 'badge-warning';
    } else {
      moistureBadge.textContent = 'OPTIMAL MOISTURE';
      moistureBadge.className = 'badge-safe';
    }

    if (isRaining) {
      rainStatus.textContent = 'DETECTED';
      rainBadge.textContent = 'WET SENSOR';
      rainBadge.className = 'badge-active';
      targetCanopyAngle = 0.52; // Deploy canopy to cover crops
      canopyStatus.textContent = 'DEPLOYED (ROOF CLOSED)';
    } else {
      rainStatus.textContent = 'NONE';
      rainBadge.textContent = 'DRY SENSOR';
      rainBadge.className = 'badge-safe';
      targetCanopyAngle = 0;
      canopyStatus.textContent = 'OPEN (0°)';
    }

    if (!manualPumpOverride) {
      if (soilMoisture < 45 && !isRaining) {
        isPumpActive = true;
        pumpStatus.textContent = 'RUNNING (AUTO)';
        pumpBadge.textContent = '5V RELAY CLOSED';
        pumpBadge.className = 'badge-active';
      } else {
        isPumpActive = false;
        pumpStatus.textContent = 'STANDBY (IDLE)';
        pumpBadge.textContent = 'RELAY OPEN';
        pumpBadge.className = 'badge-neutral';
      }
    }
  }

  updateAutomation();

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

  // Mouse drag rotation
  let isDragging = false;
  let prevMouseX = 0;
  let targetRotY = -0.3;

  canvas.addEventListener('pointerdown', (e) => {
    isDragging = true;
    prevMouseX = e.clientX;
  });

  window.addEventListener('pointermove', (e) => {
    if (isDragging) {
      const delta = e.clientX - prevMouseX;
      targetRotY += delta * 0.006;
      prevMouseX = e.clientX;
    }
  });

  window.addEventListener('pointerup', () => { isDragging = false; });

  const clock = new THREE.Clock();

  function animate() {
    animId = requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();

    farmGroup.rotation.y = THREE.MathUtils.lerp(farmGroup.rotation.y, targetRotY, 0.08);

    // Canopy smooth pivot
    canopyAngle = THREE.MathUtils.lerp(canopyAngle, targetCanopyAngle, 0.05);
    canopyPivot.rotation.x = canopyAngle;

    // Crops sway gently in wind
    crops.forEach((crop, idx) => {
      crop.rotation.z = Math.sin(elapsed * 2 + idx) * 0.04;
    });

    // Animate Rain
    if (isRaining) {
      rainMat.opacity = THREE.MathUtils.lerp(rainMat.opacity, 0.8, 0.05);
      const pos = rainGeo.attributes.position.array;
      for (let i = 0; i < rainCount; i++) {
        pos[i * 3 + 1] -= 0.15;
        if (pos[i * 3 + 1] < 0) {
          pos[i * 3 + 1] = 5.0;
        }
      }
      rainGeo.attributes.position.needsUpdate = true;
    } else {
      rainMat.opacity = THREE.MathUtils.lerp(rainMat.opacity, 0, 0.08);
    }

    // Animate Irrigation Droplets
    if (isPumpActive) {
      waterMat.opacity = THREE.MathUtils.lerp(waterMat.opacity, 0.85, 0.08);
      const pos = waterGeo.attributes.position.array;
      for (let i = 0; i < waterDropCount; i++) {
        pos[i * 3 + 1] = 0.14 + (Math.sin(elapsed * 6 + i) * 0.05);
      }
      waterGeo.attributes.position.needsUpdate = true;
    } else {
      waterMat.opacity = THREE.MathUtils.lerp(waterMat.opacity, 0, 0.08);
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
