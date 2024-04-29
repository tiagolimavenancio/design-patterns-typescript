export class Calculator {
  private value = 0;

  add(value: number) {
    this.value += value;
  }

  subtract(value: number) {
    this.value -= value;
  }
}
