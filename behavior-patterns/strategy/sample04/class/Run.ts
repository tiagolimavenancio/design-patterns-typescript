import { IFavoriteExercise } from "../interface/IFavoriteExercise";

export class Run implements IFavoriteExercise {
  start(): void {
    console.log("Start running");
  }
}
