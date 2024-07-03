import { ArticleState } from "./ArticleState";
import { EditingState } from "./EditingState";

export class DraftState extends ArticleState {
  draft(): ArticleState {
    return new EditingState();
  }
}
