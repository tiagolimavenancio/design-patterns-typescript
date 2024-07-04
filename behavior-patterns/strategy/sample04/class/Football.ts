import { IFavoriteExercise } from "../interface/IFavoriteExercise";

export class Football implements IFavoriteExercise {
  start(): void {
    console.log("Football started");
  }
}
