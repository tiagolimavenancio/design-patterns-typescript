import { Article } from "./model/Article";

(function main() {
  const docs = new Article();

  docs.pitch();
  docs.draft();
  docs.edit();
  docs.publish();

  // other block
  //   docs.pitch();
  //   docs.edit();
})();
