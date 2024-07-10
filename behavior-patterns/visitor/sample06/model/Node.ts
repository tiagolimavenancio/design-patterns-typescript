export class Node {
  private id: number;
  private left!: Node;
  private right!: Node;

  constructor(id: number) {
    this.id = id;
  }

  getId(): number {
    return this.id;
  }

  getLeft(): Node {
    return this.left;
  }

  setLeft(left: Node): void {
    this.left = left;
  }

  getRight(): Node {
    return this.right;
  }

  setRight(right: Node): void {
    this.right = right;
  }

  toString(): string {
    return `${this.id}`;
  }
}
