export abstract class FileSystem {
  public isDir: boolean;
  public isFile: boolean;

  name: string;

  constructor(name: string) {
    this.isDir = false;
    this.isFile = false;

    this.name = name;
  }

  public abstract ls(indent: number): void;

  tab(indent: number = 0): string {
    let space = "";

    for (let i = 0; i < indent; i++) {
      space += "    ";
    }

    return space;
  }
}
