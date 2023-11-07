import { Vector3D } from "./Vector3D";

export class GameObject {
  public position: Vector3D;
  public rotation: Vector3D;
  public scale: Vector3D;

  constructor() {
    this.position = new Vector3D();
    this.rotation = new Vector3D();
    this.scale = new Vector3D();
  }

  public clear() {
    this.position.clear();
    this.rotation.clear();
    this.scale.clear();
  }
}
