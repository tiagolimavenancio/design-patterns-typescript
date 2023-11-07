export class Vector3D {
  public x: number;
  public y: number;
  public z: number;

  constructor() {
    this.clear();
  }

  public clear() {
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
