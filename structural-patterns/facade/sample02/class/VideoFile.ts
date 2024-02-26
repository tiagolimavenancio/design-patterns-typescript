export class VideoFile {
  private name: string;
  private codecType: string;

  constructor(name: string) {
    this.name = name;
    this.codecType = name.substring(name.indexOf(".") + 1);
  }

  public getCodecType(): string {
    return this.codecType;
  }

  public getName(): string {
    return this.name;
  }
}
