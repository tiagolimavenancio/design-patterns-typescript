export class StackDetector {
  static match(stack: string, details: string): boolean {
    return details.indexOf(stack) > -1;
  }
}
