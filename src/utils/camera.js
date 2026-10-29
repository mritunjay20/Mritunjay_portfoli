/**
 * Camera utility for the interactive Avatar Eye interface
 * Safely requests camera permission, shows live video, and stops all tracks on close.
 */
let activeStream = null;

export function openCameraModal() {
  let modal = document.getElementById('eye-camera-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'eye-camera-modal';
    modal.className = 'camera-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Camera Interface');
    modal.innerHTML = `
      <div class="camera-modal-card">
        <div class="camera-modal-header">
          <div class="camera-hud-title">
            <span class="hud-blink-dot"></span>
            <span>OPTICAL SYSTEM / OCULAR INTERFACE</span>
          </div>
          <button class="camera-modal-close" id="camera-modal-close-btn" aria-label="Close camera">✕</button>
        </div>

        <div class="camera-video-wrapper">
          <div class="camera-reticle">
            <div class="reticle-corner top-left"></div>
            <div class="reticle-corner top-right"></div>
            <div class="reticle-corner bottom-left"></div>
            <div class="reticle-corner bottom-right"></div>
            <div class="reticle-crosshair"></div>
          </div>
          <video id="eye-camera-video" autoplay playsinline muted></video>
          <div class="camera-scanline"></div>
          <div class="camera-status-hud" id="camera-status-hud">
            <span>STATUS: INITIALIZING...</span>
          </div>
        </div>

        <div class="camera-modal-footer">
          <p class="camera-privacy-note">
            🔒 <strong>Privacy Assurance:</strong> Camera feed runs 100% locally in your browser memory. No video or frames are recorded, stored, or sent to any server.
          </p>
          <div class="camera-controls">
            <button class="btn ghost small" id="camera-stop-btn">Stop Camera</button>
            <button class="btn primary small" id="camera-close-btn">Close HUD</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const closeCamera = () => {
      stopCameraStream();
      modal.classList.remove('open');
    };

    modal.querySelector('#camera-modal-close-btn').addEventListener('click', closeCamera);
    modal.querySelector('#camera-close-btn').addEventListener('click', closeCamera);
    modal.querySelector('#camera-stop-btn').addEventListener('click', () => {
      stopCameraStream();
      const statusHud = modal.querySelector('#camera-status-hud');
      if (statusHud) statusHud.innerHTML = '<span>STATUS: FEED STOPPED BY USER</span>';
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeCamera();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeCamera();
      }
    });
  }

  modal.classList.add('open');
  startCameraStream(modal);
}

async function startCameraStream(modal) {
  const video = modal.querySelector('#eye-camera-video');
  const statusHud = modal.querySelector('#camera-status-hud');

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    statusHud.innerHTML = '<span class="status-error">CAMERA API NOT SUPPORTED IN THIS BROWSER</span>';
    return;
  }

  statusHud.innerHTML = '<span class="status-pending">AWAITING CAMERA PERMISSION...</span>';

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: { ideal: 1280 }, height: { ideal: 720 }, facingMode: 'user' },
      audio: false
    });
    activeStream = stream;
    video.srcObject = stream;
    statusHud.innerHTML = '<span class="status-active">FEED ACTIVE • 60 FPS • LOCAL ONLY</span>';
  } catch (err) {
    console.warn('Camera access denied or unavailable:', err);
    statusHud.innerHTML = `
      <span class="status-error">
        PERMISSION DENIED OR NO WEBCAM DETECTED.
        <small style="display:block;margin-top:4px;color:#a6a1b8;">
          Allow camera access in your browser address bar permissions to view the ocular feed.
        </small>
      </span>
    `;
  }
}

export function stopCameraStream() {
  if (activeStream) {
    activeStream.getTracks().forEach(track => {
      try {
        track.stop();
      } catch (e) {
        console.error('Error stopping track:', e);
      }
    });
    activeStream = null;
  }
  const video = document.getElementById('eye-camera-video');
  if (video) {
    video.srcObject = null;
  }
}
