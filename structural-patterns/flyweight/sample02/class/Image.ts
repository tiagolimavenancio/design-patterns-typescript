export class Image {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  draw() {
    console.log(`Drawing image ${this.name}`);
  }
}
