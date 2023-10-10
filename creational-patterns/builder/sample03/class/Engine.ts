export class Engine {
  private volume: number;
  private milage: number;
  private started: boolean;

  constructor(volume: number, milage: number) {
    this.volume = volume;
    this.milage = milage;
  }

  on(): void {
    this.started = true;
  }

  off(): void {
    this.started = false;
  }

  isStarted(): boolean {
    return this.started;
  }

  go(milage: number): void {
    if (this.started) {
      this.milage += milage;
    } else {
      throw new Error("Cannot go(). You must start engine first;");
    }
  }

  getVolume(): number {
    return this.volume;
  }

  getMilage(): number {
    return this.milage;
  }
}
