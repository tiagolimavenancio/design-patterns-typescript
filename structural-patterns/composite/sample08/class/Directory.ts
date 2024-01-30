import { FileSystem } from "./FileSystem";

export class Directory extends FileSystem {
  protected listings: Array<FileSystem>;

  constructor(name: string) {
    super(name);
    this.isDir = true;

    this.listings = new Array<FileSystem>();
  }

  public add(listing: FileSystem) {
    this.listings.push(listing);
  }

  public remove(listing: FileSystem) {
    const index = this.listings.indexOf(listing);
    this.listings.splice(index, 1);
  }

  public ls(indent: number = 0) {
    console.log();
    console.log(this.tab(indent) + this.name + "/");

    for (const item of this.listings) {
      item.ls(indent + 1);
    }
  }
}
