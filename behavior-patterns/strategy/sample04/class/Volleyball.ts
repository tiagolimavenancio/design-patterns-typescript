import { IFavoriteExercise } from "../interface/IFavoriteExercise";

export class Volleyball implements IFavoriteExercise {
  start(): void {
    console.log("Start playing volleyball");
  }
}
