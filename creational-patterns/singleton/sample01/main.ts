class MyClass {
  private static _instance: MyClass;

  private constructor() {}

  public static get Instance() {
    return this._instance || (this._instance = new this());
  }
}

const myClassInstance = MyClass.Instance;
