import { FlyweightFactory } from "./FlyweightFactory";

export class AppContext {
  private codes: number[] = [];

  constructor(codes: string) {
    for (let i = 0; i < codes.length; i++) {
      this.codes.push(codes.charCodeAt(i));
    }
  }

  output() {
    let ret = "";

    this.codes.forEach((c) => {
      ret += String.fromCharCode(FlyweightFactory.getFlyweight(c).code);
    });

    return ret;
  }
}
