/**
 * Speech utility using browser Web Speech Synthesis API
 * with visual toast / speech bubble fallback
 */
export function speakHello(onStart, onEnd) {
  const text = 'Hi, I am Mritunjay.';

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.0;
    utterance.pitch = 1.05;

    // Pick an English voice if available
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith('en') && !v.name.includes('Google'));
    if (englishVoice) {
      utterance.voice = englishVoice;
    }

    utterance.onstart = () => {
      showSpeechBubble(text);
      if (typeof onStart === 'function') onStart();
    };

    utterance.onend = () => {
      setTimeout(hideSpeechBubble, 1200);
      if (typeof onEnd === 'function') onEnd();
    };

    utterance.onerror = () => {
      showSpeechBubble(text);
      setTimeout(hideSpeechBubble, 2400);
      if (typeof onEnd === 'function') onEnd();
    };

    window.speechSynthesis.speak(utterance);
  } else {
    showSpeechBubble(text);
    setTimeout(hideSpeechBubble, 2800);
    if (typeof onEnd === 'function') onEnd();
  }
}

export function showSpeechBubble(message) {
  let bubble = document.getElementById('avatar-speech-bubble');
  if (!bubble) {
    bubble = document.createElement('div');
    bubble.id = 'avatar-speech-bubble';
    bubble.className = 'avatar-speech-bubble';
    document.body.appendChild(bubble);
  }
  bubble.innerHTML = `<span class="speech-icon">💬</span> <strong>Mritunjay:</strong> "${message}"`;
  bubble.classList.add('visible');
}

export function hideSpeechBubble() {
  const bubble = document.getElementById('avatar-speech-bubble');
  if (bubble) {
    bubble.classList.remove('visible');
  }
}
