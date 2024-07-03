import { IArticle } from "../interface/IArticle";
import { PendingDraftState } from "../class/PendingDraftState";
import { ArticleState } from "../class/ArticleState";

export class Article implements IArticle {
  private state: ArticleState = new PendingDraftState();

  constructor() {
    this.showCurrentState();
  }

  private showCurrentState(): void {
    console.log(this.state);
  }

  pitch(): void {
    this.state = this.state.pitch();
    this.showCurrentState();
  }

  draft(): void {
    this.state = this.state.draft();
    this.showCurrentState();
  }
  edit(): void {
    this.state = this.state.edit();
    this.showCurrentState();
  }
  publish(): void {
    this.state = this.state.publish();
    this.showCurrentState();
  }
}
