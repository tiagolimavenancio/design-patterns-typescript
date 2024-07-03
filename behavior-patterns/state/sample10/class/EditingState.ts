import { ArticleState } from "./ArticleState";
import { PublishedState } from "./PublishedState";

export class EditingState extends ArticleState {
  edit(): ArticleState {
    return new PublishedState();
  }
}
