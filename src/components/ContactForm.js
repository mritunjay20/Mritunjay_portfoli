/**
 * Interactive Contact Form Component
 * Form validation, loading state, direct mailto fallback,
 * and animated beating heart connection graphic.
 */
export function initContactForm(container) {
  container.innerHTML = `
    <div class="contact-wrapper">\n      <a class="contact-phone-link" href="tel:+919758350543">Call / WhatsApp: +91 9758350543 ↗</a>
      <div class="contact-form-card">
        <div class="contact-card-header">
          <h3>Send a message</h3>
          <p>For project discussions, collaboration, or exhibition feedback, send a message below.</p>
        </div>

        <form id="portfolio-contact-form" novalidate>
          <div class="form-group">
            <label for="contact-name">Your Full Name <span class="required">*</span></label>
            <input type="text" id="contact-name" name="name" placeholder="e.g. Alex Sharma" required />
            <span class="field-error" id="name-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-email">Email Address <span class="required">*</span></label>
            <input type="email" id="contact-email" name="email" placeholder="e.g. alex@example.com" required />
            <span class="field-error" id="email-error"></span>
          </div>

          <div class="form-group">
            <label for="contact-subject">Topic / Subject</label>
            <input type="text" id="contact-subject" name="subject" placeholder="e.g. Smart Radar Project Inquiry" />
          </div>

          <div class="form-group">
            <label for="contact-message">Message <span class="required">*</span></label>
            <textarea id="contact-message" name="message" rows="4" placeholder="Write your message or inquiry here..." required></textarea>
            <span class="field-error" id="message-error"></span>
          </div>

          <div class="form-feedback" id="form-feedback"></div>

          <div class="form-actions">
            <button type="submit" class="btn primary" id="contact-submit-btn">
              <span>Send Message</span>
              <span class="btn-spinner" id="btn-spinner"></span>
            </button>
            <a href="mailto:mritunjaysaini20@gmail.com?subject=Portfolio%20Inquiry" class="btn ghost" id="contact-mailto-btn">
              Open in Default Email Client ↗
            </a>
          </div>

          <p class="form-disclaimer">
            📬 <strong>Direct Delivery:</strong> If no local SMTP relay is configured, clicking Send will draft your message directly in your mail client addressed to Mritunjay.
          </p>
        </form>
      </div>

      <div class="contact-heart-stage" aria-label="Interactive 3D heart; move your pointer to rotate it">
        <div class="heart-pulse-halo"></div>
        <div class="heart-geometric-core" id="heart-core">
          <svg viewBox="0 0 100 100" class="heart-svg">
            <defs>
              <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#c084fc" />
                <stop offset="50%" stop-color="#8b5cf6" />
                <stop offset="100%" stop-color="#38bdf8" />
              </linearGradient>
            </defs>
            <path d="M50,85 C50,85 15,60 15,35 C15,22 25,12 37,12 C44,12 50,17 50,17 C50,17 56,12 63,12 C75,12 85,22 85,35 C85,60 50,85 50,85 Z" fill="url(#heartGrad)" />
          </svg>
        </div>
        <div class="heart-telemetry">
          <span>CONNECTION CORE ACTIVE</span>
          <small>Move your mouse to rotate the 3D heart</small>
        </div>
      </div>
    </div>
  `;

  const form = container.querySelector('#portfolio-contact-form');
  const nameInput = container.querySelector('#contact-name');
  const emailInput = container.querySelector('#contact-email');
  const subjectInput = container.querySelector('#contact-subject');
  const messageInput = container.querySelector('#contact-message');
  const nameError = container.querySelector('#name-error');
  const emailError = container.querySelector('#email-error');
  const messageError = container.querySelector('#message-error');
  const feedback = container.querySelector('#form-feedback');
  const submitBtn = container.querySelector('#contact-submit-btn');
  const spinner = container.querySelector('#btn-spinner');
  const heartCore = container.querySelector('#heart-core');

  // Interactive heart pulse
  heartCore.addEventListener('pointerenter', () => heartCore.classList.add('fast-beat'));
  heartCore.addEventListener('pointerleave', () => {
    heartCore.classList.remove('fast-beat');
    heartCore.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
  heartCore.addEventListener('pointermove', (event) => {
    const rect = heartCore.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    heartCore.style.transform = `perspective(700px) rotateX(${-y * 28}deg) rotateY(${x * 34}deg) translateZ(12px)`;
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    feedback.textContent = '';
    feedback.className = 'form-feedback';

    let hasError = false;

    if (!nameInput.value.trim()) {
      nameError.textContent = 'Please enter your name.';
      hasError = true;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Please provide a valid email address.';
      hasError = true;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 8) {
      messageError.textContent = 'Message must be at least 8 characters long.';
      hasError = true;
    }

    if (hasError) return;

    // Loading State
    submitBtn.disabled = true;
    spinner.classList.add('active');
    feedback.textContent = 'Packaging transmission packet...';

    setTimeout(() => {
      submitBtn.disabled = false;
      spinner.classList.remove('active');

      const subject = encodeURIComponent(subjectInput.value.trim() || 'Portfolio Contact Inquiry');
      const body = encodeURIComponent(
        `From: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      feedback.innerHTML = `
        <span class="safe">✓ Transmission generated!</span>
        <p style="margin:6px 0 0;font-size:12px;color:#cbd5e1;">
          Launching your email client to dispatch this message directly to Mritunjay...
        </p>
      `;

      // Trigger standard mailto fallback
      window.location.href = `mailto:mritunjaysaini20@gmail.com?subject=${subject}&body=${body}`;
    }, 1000);
  });
}
