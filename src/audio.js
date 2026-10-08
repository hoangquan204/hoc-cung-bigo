/* ====== ÂM THANH TRÒ CHƠI (WEB AUDIO API) ====== */
let audioCtx = null;
let isMuted = localStorage.getItem("hcb_muted") === "true";

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playSound(type) {
  if (isMuted) return;
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const now = ctx.currentTime;

    if (type === "correct") {
      // Âm thanh khi trả lời đúng: Giai điệu tươi vui 4 nốt (C5 - E5 - G5 - C6)
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.07);
        gain.gain.setValueAtTime(0.25, now + idx * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.07 + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.07);
        osc.stop(now + idx * 0.07 + 0.22);
      });
    } else if (type === "wrong") {
      // Âm thanh khi trả lời sai: Tiếng buzz trầm tụt tần số (170Hz -> 80Hz)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(170, now);
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.28);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.28);
    } else if (type === "timeout") {
      // Âm thanh khi hết giờ: 2 tiếng bip ngắn trầm
      [0, 0.12].forEach((delay) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "square";
        osc.frequency.setValueAtTime(200, now + delay);
        gain.gain.setValueAtTime(0.18, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + 0.08);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + delay);
        osc.stop(now + delay + 0.08);
      });
    } else if (type === "win") {
      // Âm thanh khi kết thúc màn chơi/thắng lớn
      const notes = [440, 554.37, 659.25, 880];
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + idx * 0.1);
        gain.gain.setValueAtTime(0.25, now + idx * 0.1);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + idx * 0.1);
        osc.stop(now + idx * 0.1 + 0.35);
      });
    }
  } catch (e) {
    console.warn("Audio playback error:", e);
  }
}

export function toggleSound() {
  isMuted = !isMuted;
  localStorage.setItem("hcb_muted", isMuted ? "true" : "false");
  updateSoundBtn();
  if (!isMuted) {
    playSound("correct");
  }
}

export function updateSoundBtn() {
  const btn = document.getElementById("soundBtn");
  if (btn) {
    btn.innerHTML = isMuted ? "🔇 Tắt âm" : "🔊 Bật âm";
    btn.title = isMuted ? "Nhấp để bật âm thanh" : "Nhấp để tắt âm thanh";
    if (isMuted) {
      btn.classList.add("muted");
    } else {
      btn.classList.remove("muted");
    }
  }
}
