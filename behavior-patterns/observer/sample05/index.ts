import { BarObserver } from "./class/BarObserver";
import { PercentObserver } from "./class/PercentObserver";
import { Subject } from "./class/Subject";
import { TableObserver } from "./class/TableObserver";
import { Data } from "./model/Data";

(function main() {
  const subject = new Subject();

  subject.attach(new TableObserver(subject));
  subject.attach(new BarObserver(subject));
  subject.attach(new PercentObserver(subject));

  subject.setState(new Data(7, 3, 1));
  subject.setState(new Data(2, 3, 1));
})();
