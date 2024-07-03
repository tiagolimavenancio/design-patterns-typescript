import { ArticleState } from "./ArticleState";
import { PendingDraftState } from "./PendingDraftState";

export class PublishedState extends ArticleState {
  publish(): ArticleState {
    return new PendingDraftState();
  }
}
