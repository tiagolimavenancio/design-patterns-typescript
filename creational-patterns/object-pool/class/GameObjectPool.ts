import { GameObject } from "./GameObject";

export class GameObjectPool {
  private activeList: Array<GameObject>;
  private reserveList: Array<GameObject>;

  private numberActive: number;
  private numberReserved: number;

  constructor(reserve: number = 5) {
    this.activeList = new Array<GameObject>();
    this.reserveList = new Array<GameObject>();

    this.numberActive = 0;
    this.numberReserved = 0;

    this.initializeReserve(reserve);
  }

  private initializeReserve(reserve: number) {
    for (let i = 0; i < reserve; i++) {
      const gameObject = new GameObject();
      this.reserveList.push(gameObject);
    }
  }

  public getGameObject(): GameObject | undefined {
    if (this.numberReserved === 0) {
      this.reserveList.push(new GameObject());
      this.numberReserved++;
    }

    const gameObject: GameObject | undefined = this.reserveList.pop();
    this.numberReserved--;

    if (gameObject) {
      this.activeList.push(gameObject);
      this.numberActive++;
    }

    gameObject?.clear();

    return gameObject;
  }

  public returnGameObject(gameObject: GameObject) {
    const index = this.activeList.indexOf(gameObject);

    if (index >= 0) {
      this.activeList.splice(index, 1);
      this.numberActive--;

      this.reserveList.push(gameObject);
      this.numberReserved++;
    }
  }
}
