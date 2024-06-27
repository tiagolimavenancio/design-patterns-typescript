export class CheckList {
  protected localize() {
    console.log("  establish a perimeter");
  }

  protected isolate() {
    console.log(" isolate the grid");
  }

  protected identify() {
    console.log(" identify the source");
  }

  public byTheNumbers() {
    this.localize();
    this.isolate();
    this.identify();
  }
}
