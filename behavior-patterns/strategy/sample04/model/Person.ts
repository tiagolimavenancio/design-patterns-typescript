import { IFavoriteExercise } from "../interface/IFavoriteExercise";

export class Person {
  name: string;
  favoriteExercise: IFavoriteExercise;

  constructor(name: string, favoriteExercise: IFavoriteExercise) {
    this.name = name;
    this.favoriteExercise = favoriteExercise;
  }

  exercise(): void {
    console.log(this.name + " decided:");
    this.favoriteExercise.start();
  }
}
