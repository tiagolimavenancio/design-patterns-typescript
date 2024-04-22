import { DoNothing } from "./class/DoNothing";
import { JavaStack } from "./class/JavaStack";
import { JavaScriptStack } from "./class/JavaScriptStack";
import { PHPStack } from "./class/PHPStack";

import { Job } from "./model/Job";

(function main() {
  const doNothing = new DoNothing();
  const javaStack = new JavaStack(doNothing);
  const javascriptStack = new JavaScriptStack(javaStack);
  const phpStack = new PHPStack(javascriptStack);

  const job = new Job("Java");
  phpStack.handle(job);
})();
