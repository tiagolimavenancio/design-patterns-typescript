import { IRecipeComponent } from "../interface/IRecipeComponent";

export class Ingredient implements IRecipeComponent {
  name: string;
  amount: string;

  constructor(name: string, amount: string) {
    this.name = name;
    this.amount = amount;
  }

  showDetails(): string {
    return `Ingredient: ${this.name}, Amount: ${this.amount}`;
  }
}
