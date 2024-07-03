import { IArticle } from "../interface/IArticle";
import { ArticleState } from "./ArticleState";
import { DraftState } from "./DraftState";

export class PendingDraftState extends ArticleState {
  pitch(): ArticleState {
    return new DraftState();
  }
}
