import { IRecipeComponent } from "../interface/IRecipeComponent";

export class Recipe implements IRecipeComponent {
  name: string;
  components: IRecipeComponent[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addComponent(component: IRecipeComponent) {
    this.components.push(component);
  }

  showDetails(): string {
    let details = `Recipe: ${this.name}\n`;

    this.components.forEach((component) => {
      details += `  ${component.showDetails()}\n`;
    });

    return details;
  }
}
