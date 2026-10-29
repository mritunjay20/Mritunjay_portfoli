/**
 * Voice Interaction Scene
 * Animated audio visualizer (Canvas 2D frequency spectrum & sine wave),
 * microphone permission handling with Web Audio API,
 * speech recognition command handling, and voice synthesis feedback.
 */
export function initVoiceScene(container) {

  const sceneStyle = document.createElement('style');
  sceneStyle.textContent = `.voice-container {
  --scene-accent: #67e8f9;
  --scene-accent-rgb: 103, 232, 249;
  color: #e5edf8;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  width: 100%;
  min-width: 0;
  box-sizing: border-box;
}.voice-container *, .voice-container *::before, .voice-container *::after { box-sizing: border-box; }.voice-container [class$="-hud-header"], .voice-container .radar-hud-bar, .voice-container .face-hud-header {
  display: flex; align-items: center; justify-content: space-between;
  flex-wrap: wrap; gap: 12px; padding: 14px 16px;
  border: 1px solid rgba(var(--scene-accent-rgb), .22);
  border-radius: 16px 16px 0 0;
  background: linear-gradient(115deg, rgba(15, 25, 43, .96), rgba(7, 14, 27, .88));
  box-shadow: inset 0 1px rgba(255,255,255,.04);
}.voice-container [class$="-badge"], .voice-container .radar-status-badge, .voice-container .face-badge {
  display: inline-flex; align-items: center; gap: 9px;
  color: #b8c7dc; font: 600 10px/1.5 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .09em; text-transform: uppercase;
}.voice-container .hud-blink-dot {
  display: inline-block; width: 7px; height: 7px; flex: 0 0 7px; border-radius: 50%;
  background: var(--scene-accent); box-shadow: 0 0 12px currentColor;
}.voice-container .hud-blink-dot.cyan { color: #67e8f9; background: #67e8f9; }.voice-container .hud-blink-dot.purple { color: #c4b5fd; background: #c4b5fd; }.voice-container .hud-blink-dot.green { color: #86efac; background: #86efac; }.voice-container .hud-blink-dot.orange { color: #fdba74; background: #fdba74; }.voice-container [class$="-viewport-wrapper"], .voice-container .radar-display-wrapper, .voice-container .voice-visualizer-wrapper {
  position: relative; isolation: isolate; overflow: hidden; min-height: 280px;
  border: 1px solid rgba(var(--scene-accent-rgb), .19);
  border-top: 0; border-bottom: 0;
  background:
    radial-gradient(ellipse at 50% 35%, rgba(var(--scene-accent-rgb), .09), transparent 58%),
    linear-gradient(135deg, #080f1d, #030711 70%);
}.voice-container [class$="-viewport-wrapper"]::before, .voice-container .radar-display-wrapper::before, .voice-container .voice-visualizer-wrapper::before {
  content: ""; position: absolute; inset: 0; z-index: 0; pointer-events: none;
  background-image: linear-gradient(rgba(148,163,184,.045) 1px, transparent 1px),
    linear-gradient(90deg, rgba(148,163,184,.045) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,.8), transparent 96%);
}.voice-container [class$="-viewport-wrapper"] canvas, .voice-container #radar-canvas, .voice-container #voice-canvas {
  position: relative; z-index: 1; display: block; width: 100%; max-width: 100%;
}.voice-container [class$="-telemetry-hud"], .voice-container .radar-overlay-hud, .voice-container .voice-transcript-overlay {
  position: absolute; z-index: 2; inset: 12px; pointer-events: none;
}.voice-container [class$="-telemetry-card"], .voice-container [class$="-metric-card"], .voice-container .face-telemetry-hud, .voice-container .nfc-payload-card, .voice-container .voice-transcript-box, .voice-container .voice-response-box, .voice-container .hud-telemetry-corner {
  border: 1px solid rgba(var(--scene-accent-rgb), .2);
  border-radius: 12px; padding: 12px 14px;
  background: rgba(5, 12, 25, .78); backdrop-filter: blur(12px);
  box-shadow: 0 8px 28px rgba(0,0,0,.18), inset 0 1px rgba(255,255,255,.035);
}.voice-container [class$="-telemetry-card"] span, .voice-container [class$="-metric-card"] span, .voice-container .hud-telemetry-corner span, .voice-container .face-hud-row span, .voice-container .nfc-payload-card span {
  color: #8fa3bd; font: 500 10px/1.55 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: .045em;
}.voice-container [class$="-telemetry-card"] strong, .voice-container [class$="-metric-card"] strong, .voice-container .face-hud-row strong, .voice-container .nfc-payload-card strong {
  color: #e6f4ff; font-size: 12px; font-weight: 650;
}.voice-container [class$="-controls-dock"], .voice-container [class$="-slider-dock"], .voice-container .radar-control-panel, .voice-container .radar-controls-dock, .voice-container .voice-command-dock {
  display: flex; align-items: center; flex-wrap: wrap; gap: 10px;
  padding: 14px 16px; border: 1px solid rgba(var(--scene-accent-rgb), .18);
  border-radius: 0 0 16px 16px; background: rgba(8, 15, 29, .96);
}.voice-container .hud-pill-btn, .voice-container .btn, .voice-container .command-chip, .voice-container button {
  font: inherit; cursor: pointer; transition: transform .18s ease, border-color .18s ease,
    background .18s ease, box-shadow .18s ease;
}.voice-container .hud-pill-btn, .voice-container .command-chip {
  border: 1px solid rgba(var(--scene-accent-rgb), .25); border-radius: 999px;
  padding: 8px 12px; color: #c9d8ea; background: rgba(16, 30, 49, .8);
  font-size: 11px; font-weight: 650;
}.voice-container .btn.primary, .voice-container button.primary {
  border: 1px solid rgba(var(--scene-accent-rgb), .45); border-radius: 9px;
  padding: 9px 13px; color: #06121d;
  background: linear-gradient(135deg, var(--scene-accent), #a5f3fc);
  box-shadow: 0 4px 16px rgba(var(--scene-accent-rgb), .12);
  font-size: 11px; font-weight: 750;
}.voice-container .btn.ghost, .voice-container button.ghost {
  border: 1px solid rgba(148,163,184,.24); border-radius: 9px;
  padding: 9px 13px; color: #c4d0e0; background: rgba(30,41,59,.55); font-size: 11px;
}.voice-container .hud-pill-btn:hover, .voice-container .command-chip:hover, .voice-container .btn:hover, .voice-container button:hover {
  transform: translateY(-1px); border-color: rgba(var(--scene-accent-rgb), .65);
  box-shadow: 0 5px 18px rgba(var(--scene-accent-rgb), .1);
}.voice-container button:focus-visible, .voice-container input:focus-visible {
  outline: 2px solid var(--scene-accent); outline-offset: 3px;
}.voice-container .safe, .voice-container .indicator-safe { color: #86efac !important; }.voice-container .badge-warning, .voice-container .indicator-warn { color: #fcd34d !important; }.voice-container .indicator-hazard { color: #fca5a5 !important; }.voice-container p, .voice-container .dock-hint, .voice-container .nfc-disclaimer, .voice-container .helmet-disclaimer, .voice-container .fp-disclaimer, .voice-container .voice-privacy-notice {
  color: #9aabc2; font-size: 11px; line-height: 1.7;
}.voice-container input[type="range"] { accent-color: var(--scene-accent); width: min(100%, 320px); cursor: pointer; }.voice-container label { color: #b8c7dc; font-size: 11px; }@media (max-width: 600px){.voice-container [class$="-hud-header"], .voice-container .radar-hud-bar, .voice-container .face-hud-header { align-items: flex-start; padding: 12px; }.voice-container [class$="-viewport-wrapper"], .voice-container .radar-display-wrapper, .voice-container .voice-visualizer-wrapper { min-height: 240px; }.voice-container [class$="-controls-dock"], .voice-container [class$="-slider-dock"], .voice-container .radar-control-panel, .voice-container .voice-command-dock { padding: 12px; }.voice-container [class$="-telemetry-hud"] { inset: 8px; }.voice-container [class$="-badge"], .voice-container .radar-status-badge, .voice-container .face-badge { font-size: 9px; }
}.voice-container .voice-transcript-overlay { display:flex; flex-direction:column; justify-content:flex-end; align-items:flex-start; gap:8px; }.voice-container .voice-transcript-box, .voice-container .voice-response-box { max-width:min(420px,85%); }.voice-container .transcript-label, .voice-container .response-label { color:#c4b5fd; font:600 10px ui-monospace,monospace; letter-spacing:.06em; }.voice-container .voice-transcript-box p, .voice-container .voice-response-box p { margin:6px 0 0; color:#e2e8f0; }.voice-container .voice-command-dock { align-items:flex-start; }.voice-container .command-dock-title { width:100%; color:#b8c7dc; font-size:11px; font-weight:700; }.voice-container .command-chips { display:flex; flex-wrap:wrap; gap:7px; }.voice-container .voice-privacy-notice { flex-basis:100%; margin:0; }
`;
  if (!container.querySelector('style[data-scene-style="VoiceScene.js"]')) {
    sceneStyle.setAttribute('data-scene-style', 'VoiceScene.js');
    container.appendChild(sceneStyle);
  }

  container.innerHTML = `
    <div class="voice-container">
      <div class="voice-hud-header">
        <div class="voice-badge">
          <span class="hud-blink-dot purple" id="voice-dot"></span>
          <span id="voice-status-title">VOICE INTERACTION CORE • STANDBY</span>
        </div>
        <div class="voice-mic-controls">
          <button class="btn primary small" id="voice-mic-toggle">Start Microphone</button>
          <button class="btn ghost small" id="voice-speak-demo-btn">Say Sample Phrase</button>
        </div>
      </div>

      <div class="voice-visualizer-wrapper">
        <canvas id="voice-canvas"></canvas>
        <div class="voice-transcript-overlay">
          <div class="voice-transcript-box">
            <span class="transcript-label">LIVE SPEECH TRANSCRIPT:</span>
            <p id="voice-transcript-text">"Click 'Start Microphone' or click any sample command below to test speech interaction."</p>
          </div>
          <div class="voice-response-box">
            <span class="response-label">ASSISTANT RESPONSE:</span>
            <p id="voice-response-text">Awaiting user vocal command.</p>
          </div>
        </div>
      </div>

      <div class="voice-command-dock">
        <span class="command-dock-title">Supported Vocal Commands:</span>
        <div class="command-chips">
          <button class="command-chip" data-cmd="Who is Mritunjay?">"Who is Mritunjay?"</button>
          <button class="command-chip" data-cmd="Show me your projects">"Show me your projects"</button>
          <button class="command-chip" data-cmd="Tell me about Smart Radar">"Tell me about Smart Radar"</button>
          <button class="command-chip" data-cmd="What are your core skills?">"What are your core skills?"</button>
          <button class="command-chip" data-cmd="How to contact you?">"How to contact you?"</button>
        </div>
        <p class="voice-privacy-notice">
          🔒 <strong>Local Processing:</strong> Speech recognition runs client-side via the browser's Web Speech API. Audio is never recorded, uploaded, or transmitted to any external server.
        </p>
      </div>
    </div>
  `;

  const canvas = container.querySelector('#voice-canvas');
  const ctx = canvas.getContext('2d');
  const micToggleBtn = container.querySelector('#voice-mic-toggle');
  const speakDemoBtn = container.querySelector('#voice-speak-demo-btn');
  const transcriptText = container.querySelector('#voice-transcript-text');
  const responseText = container.querySelector('#voice-response-text');
  const statusTitle = container.querySelector('#voice-status-title');
  const statusDot = container.querySelector('#voice-dot');
  const commandChips = container.querySelectorAll('.command-chip');

  let audioCtx = null;
  let analyser = null;
  let micStream = null;
  let recognition = null;
  let isListening = false;
  let animId = null;
  let width = 0, height = 0;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = rect.width;
    height = Math.max(260, rect.height || 320);
    canvas.width = width * window.devicePixelRatio;
    canvas.height = height * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  resize();
  window.addEventListener('resize', resize);

  // Speech Recognition Setup
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (SpeechRecognition) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      isListening = true;
      micToggleBtn.textContent = 'Stop Microphone';
      micToggleBtn.classList.add('danger');
      statusTitle.textContent = 'LISTENING FOR SPOKEN COMMANDS...';
      statusDot.className = 'hud-blink-dot green';
    };

    recognition.onresult = (e) => {
      let interim = '';
      let final = '';
      for (let i = e.resultIndex; i < e.results.length; ++i) {
        if (e.results[i].isFinal) {
          final += e.results[i][0].transcript;
        } else {
          interim += e.results[i][0].transcript;
        }
      }
      const spoken = final || interim;
      if (spoken) {
        transcriptText.textContent = `"${spoken}"`;
        if (final) {
          handleVoiceCommand(final);
        }
      }
    };

    recognition.onerror = (e) => {
      console.warn('Speech recognition error:', e.error);
      if (e.error === 'not-allowed') {
        transcriptText.textContent = 'Microphone permission was denied. You can still test voice synthesis using the sample command buttons below.';
        stopListening();
      }
    };

    recognition.onend = () => {
      if (isListening) {
        try { recognition.start(); } catch (err) { /* ignore */ }
      }
    };
  }

  async function startListening() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
      micStream = stream;

      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      if (recognition) {
        recognition.start();
      } else {
        transcriptText.textContent = 'SpeechRecognition API not available in this browser. Showing simulated audio frequencies.';
        isListening = true;
        micToggleBtn.textContent = 'Stop Microphone';
      }
    } catch (err) {
      console.warn('Mic access failed:', err);
      transcriptText.textContent = 'Microphone permission not granted. Use sample command buttons to test audio synthesis!';
    }
  }

  function stopListening() {
    isListening = false;
    if (micStream) {
      micStream.getTracks().forEach(t => t.stop());
      micStream = null;
    }
    if (audioCtx) {
      audioCtx.close();
      audioCtx = null;
      analyser = null;
    }
    if (recognition) {
      try { recognition.stop(); } catch (e) { /* ignore */ }
    }
    micToggleBtn.textContent = 'Start Microphone';
    micToggleBtn.classList.remove('danger');
    statusTitle.textContent = 'VOICE INTERACTION CORE • STANDBY';
    statusDot.className = 'hud-blink-dot purple';
  }

  micToggleBtn.addEventListener('click', () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  });

  function handleVoiceCommand(cmd) {
    const text = cmd.toLowerCase();
    let reply = '';

    if (text.includes('who is') || text.includes('who are you') || text.includes('about')) {
      reply = 'Mritunjay is a Class 10 student passionate about creative coding, robotics, IoT, and embedded electronics.';
    } else if (text.includes('project') || text.includes('build')) {
      reply = 'Mritunjay has built 8 interactive builds including the Smart Radar System, Smart Agriculture, and LPG Safety Detector.';
    } else if (text.includes('radar')) {
      reply = 'The Smart Radar system sweeps 180 degrees using an ultrasonic sensor and micro servo, transmitting live coordinates to a custom HUD.';
    } else if (text.includes('skill')) {
      reply = 'Core skills include HTML, CSS, JavaScript, Python, C, C++, Arduino, Three.js, and IoT prototyping.';
    } else if (text.includes('contact') || text.includes('reach') || text.includes('email')) {
      reply = 'You can reach Mritunjay via GitHub at github.com/mritunjay20 or via the Contact form below.';
    } else {
      reply = `Received command: "${cmd}". How else may I assist you with exploring Mritunjay's work?`;
    }

    responseText.textContent = reply;
    speakReply(reply);
  }

  function speakReply(text) {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1.0;
      u.pitch = 1.05;
      window.speechSynthesis.speak(u);
    }
  }

  commandChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const cmd = chip.dataset.cmd;
      transcriptText.textContent = `"${cmd}"`;
      handleVoiceCommand(cmd);
    });
  });

  speakDemoBtn.addEventListener('click', () => {
    const phrase = 'Welcome to Mritunjay\'s interactive 3D portfolio. Explore the avatar, projects, and robotics builds!';
    transcriptText.textContent = `"${phrase}"`;
    responseText.textContent = 'Speaking greeting message...';
    speakReply(phrase);
  });

  // Render Visualizer
  let simTime = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    simTime += 0.04;

    const centerY = height / 2;
    const barCount = 48;
    const barWidth = (width / barCount) * 0.7;
    const spacing = (width / barCount) * 0.3;

    let freqData = new Uint8Array(barCount);

    if (analyser && isListening) {
      const buffer = new Uint8Array(analyser.frequencyBinCount);
      analyser.getByteFrequencyData(buffer);
      for (let i = 0; i < barCount; i++) {
        freqData[i] = buffer[Math.floor(i * (buffer.length / barCount))];
      }
    } else {
      // Simulated gentle breathing wave
      for (let i = 0; i < barCount; i++) {
        const val = Math.sin(simTime * 2 + i * 0.2) * 25 + Math.cos(simTime + i * 0.4) * 15 + 30;
        freqData[i] = Math.max(10, val);
      }
    }

    // 1. Draw glowing frequency bars
    for (let i = 0; i < barCount; i++) {
      const magnitude = (freqData[i] / 255) * (height * 0.38);
      const x = i * (barWidth + spacing) + spacing;

      const grad = ctx.createLinearGradient(0, centerY - magnitude, 0, centerY + magnitude);
      grad.addColorStop(0, '#c084fc');
      grad.addColorStop(0.5, '#8b5cf6');
      grad.addColorStop(1, '#38bdf8');

      ctx.fillStyle = grad;
      ctx.shadowColor = '#8b5cf6';
      ctx.shadowBlur = 10;
      ctx.fillRect(x, centerY - magnitude, barWidth, magnitude * 2);
    }
    ctx.shadowBlur = 0;

    // 2. Continuous center sine waveform
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let x = 0; x < width; x += 4) {
      const wave = Math.sin(x * 0.03 + simTime * 3) * (isListening ? 22 : 8);
      const y = centerY + wave;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    animId = requestAnimationFrame(draw);
  }

  animId = requestAnimationFrame(draw);

  return {
    dispose: () => {
      if (animId) cancelAnimationFrame(animId);
      stopListening();
      window.removeEventListener('resize', resize);
    }
  };
}
