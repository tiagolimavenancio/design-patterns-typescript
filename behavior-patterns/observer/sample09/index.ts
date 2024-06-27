import { TwitterUserObserver } from "./class/TwitterUserObserver";
import { TwitterUserSubject } from "./class/TwitterUserSubject";

(function main() {
  const elonMusk = new TwitterUserSubject("Elon Musk");

  const bill = new TwitterUserObserver("Bill");
  elonMusk.subscribe(bill);

  const jeff = new TwitterUserObserver("Jeff");
  elonMusk.subscribe(jeff);

  const mark = new TwitterUserObserver("Mark");
  elonMusk.subscribe(mark);

  elonMusk.publishNewTweet({
    post: "I am sending people to Mars",
  });

  elonMusk.unsubscribe(jeff);

  elonMusk.publishNewTweet({
    post: "Bought Twitter!",
  });
})();
