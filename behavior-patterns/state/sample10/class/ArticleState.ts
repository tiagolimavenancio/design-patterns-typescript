import { IArticle } from "../interface/IArticle";

export abstract class ArticleState implements IArticle {
  pitch(): ArticleState {
    throw new Error("Invalid Operation: Cannot perform task in current state");
  }
  draft(): ArticleState {
    throw new Error("Invalid Operation: Cannot perform task in current state");
  }

  edit(): ArticleState {
    throw new Error("Invalid Operation: Cannot perform task in current state");
  }

  publish(): ArticleState {
    throw new Error("Invalid Operation: Cannot perform task in current state");
  }
}
