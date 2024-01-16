export class Android {
  punch(): number {
    return 10;
  }

  kick(): number {
    return Math.random() * this.punch() + this.punch();
  }
}
