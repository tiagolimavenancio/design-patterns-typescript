import { FileSystem } from "./FileSystem";

export class FileType extends FileSystem {
  protected ext: string;

  constructor(name: string, ext: string) {
    super(name);
    this.isFile = true;
    this.ext = ext;
  }

  public ls(indent: number): void {
    console.log(this.tab(indent) + this.name + "." + this.ext);
  }
}
