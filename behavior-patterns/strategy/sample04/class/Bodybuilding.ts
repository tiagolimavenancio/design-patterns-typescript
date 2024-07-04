import { IFavoriteExercise } from "../interface/IFavoriteExercise";

export class Bodybuilding implements IFavoriteExercise {
  start(): void {
    console.log("Bodybuilding started");
  }
}
