export class Context {
  protected input: string = "";
  protected output: number = 0;

  constructor(input: string) {
    this.input = input;
  }

  public getInput(): string {
    return this.input;
  }

  public setInput(input: string): void {
    this.input = input;
  }

  public getOutput(): number {
    return this.output;
  }

  public setOutput(output: number): void {
    this.output = output;
  }
}
