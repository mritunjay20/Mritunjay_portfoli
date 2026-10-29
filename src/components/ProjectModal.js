import { initRadarScene } from '../scenes/RadarScene.js';
import { initAgricultureScene } from '../scenes/AgricultureScene.js';
import { initLPGScene } from '../scenes/LPGScene.js';
import { initVoiceScene } from '../scenes/VoiceScene.js';
import { initHelmetScene } from '../scenes/HelmetScene.js';
import { initFaceMeshScene } from '../scenes/FaceMeshScene.js';
import { initNFCScene } from '../scenes/NFCScene.js';
import { initFingerprintScene } from '../scenes/FingerprintScene.js';

let activeSceneInstance = null;

export function openProjectModal(project) {
  let modal = document.getElementById('project-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'project-modal';
    modal.className = 'project-modal-backdrop';
    document.body.appendChild(modal);
  }

  // Clean previous instance
  if (activeSceneInstance && typeof activeSceneInstance.dispose === 'function') {
    activeSceneInstance.dispose();
    activeSceneInstance = null;
  }

  modal.innerHTML = `
    <div class="project-modal-wrapper" role="dialog" aria-modal="true" aria-labelledby="modal-project-title">
      <div class="modal-header">
        <div class="modal-title-group">
          <span class="modal-eyebrow">PROJECT ${project.number} • ${project.type.toUpperCase()}</span>
          <h2 id="modal-project-title">${project.title}</h2>
        </div>
        <div class="modal-actions">
          <span class="modal-status-badge">${project.status}</span>
          <button class="modal-close-btn" id="modal-close-btn" aria-label="Close project modal">✕</button>
        </div>
      </div>

      <div class="modal-tabs">
        <button class="modal-tab-btn active" data-tab="demo">Interactive Simulation</button>
        <button class="modal-tab-btn" data-tab="specs">Engineering Specs & Architecture</button>
      </div>

      <div class="modal-content">
        <!-- Interactive 3D / 2D Simulation Tab -->
        <div class="modal-tab-pane active" id="tab-demo">
          <div class="project-scene-host" id="project-scene-host"></div>
        </div>

        <!-- Specifications Tab -->
        <div class="modal-tab-pane" id="tab-specs">
          <div class="specs-grid">
            <div class="specs-section">
              <h3>System Overview</h3>
              <p>${project.overview}</p>

              <h3>Working Principle & Logic</h3>
              <p>${project.workingPrinciple}</p>

              <h3>Target Applications</h3>
              <ul class="specs-list">
                ${project.applications.map(app => `<li>${app}</li>`).join('')}
              </ul>
            </div>

            <div class="specs-section">
              <h3>Hardware & Component Bill of Materials</h3>
              <table class="specs-table">
                <thead>
                  <tr><th>Subsystem</th><th>Specification & Role</th></tr>
                </thead>
                <tbody>
                  ${project.components.map(c => `<tr><td><strong>${c.name}</strong></td><td>${c.spec}</td></tr>`).join('')}
                </tbody>
              </table>

              <h3>Data & Signal Pipeline</h3>
              <ol class="specs-pipeline">
                ${project.architecture.map(step => `<li>${step}</li>`).join('')}
              </ol>

              <div class="specs-disclaimer">
                <strong>Project Integrity:</strong> ${project.disclaimer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  const host = modal.querySelector('#project-scene-host');
  mountProjectScene(project.id, host);

  // Close handlers
  const closeModal = () => {
    if (activeSceneInstance && typeof activeSceneInstance.dispose === 'function') {
      activeSceneInstance.dispose();
      activeSceneInstance = null;
    }
    modal.classList.remove('open');
    document.body.style.overflow = '';
  };

  modal.querySelector('#modal-close-btn').addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });

  // Tab switching
  const tabs = modal.querySelectorAll('.modal-tab-btn');
  const panes = modal.querySelectorAll('.modal-tab-pane');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      panes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPane = modal.querySelector(`#tab-${tab.dataset.tab}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });
}

function mountProjectScene(id, container) {
  if (!container) return;

  switch (id) {
    case 'radar-system':
      activeSceneInstance = initRadarScene(container);
      break;
    case 'smart-agriculture':
      activeSceneInstance = initAgricultureScene(container);
      break;
    case 'lpg-safety':
      activeSceneInstance = initLPGScene(container);
      break;
    case 'voice-assistant':
      activeSceneInstance = initVoiceScene(container);
      break;
    case 'helmet-detection':
      activeSceneInstance = initHelmetScene(container);
      break;
    case 'face-recognition':
      activeSceneInstance = initFaceMeshScene(container);
      break;
    case 'nfc-card':
      activeSceneInstance = initNFCScene(container);
      break;
    case 'fingerprint-system':
      activeSceneInstance = initFingerprintScene(container);
      break;
    default:
      container.innerHTML = `<div class="p-8 text-center text-slate-400">Interactive demo for ${id} loaded.</div>`;
  }
}
