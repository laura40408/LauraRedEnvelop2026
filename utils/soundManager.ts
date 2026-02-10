
class SoundManager {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private createOscillator(freq: number, type: OscillatorType, startTime: number, duration: number, volume: number) {
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, startTime);
    
    gain.gain.setValueAtTime(volume, startTime);
    gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(startTime);
    osc.stop(startTime + duration);
  }

  playDraw() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Fast rhythmic ticking for tension
    for (let i = 0; i < 8; i++) {
      this.createOscillator(150 + (i * 50), 'sine', now + (i * 0.25), 0.1, 0.1);
    }
  }

  playWin() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Triumphant arpeggio: C4, E4, G4, C5
    const freqs = [261.63, 329.63, 392.00, 523.25];
    freqs.forEach((f, i) => {
      this.createOscillator(f, 'triangle', now + (i * 0.15), 0.6, 0.2);
    });
  }

  playReset() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    // Double clean beep
    this.createOscillator(440, 'sine', now, 0.1, 0.1);
    this.createOscillator(880, 'sine', now + 0.15, 0.1, 0.1);
  }
}

export const soundManager = new SoundManager();
