export class MementoText {
  protected state;

  constructor(text: string) {
    this.state = text;
  }

  getState(): string {
    return this.state;
  }
}
