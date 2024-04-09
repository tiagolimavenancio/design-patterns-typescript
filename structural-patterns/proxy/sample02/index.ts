import { RealSubject } from "./class/RealSubject";
import { Proxy } from "./class/Proxy";
import { ISubject } from "./interface/ISubject";

function request(subject: ISubject) {
  subject.request();
}

(function main() {
  console.log("Client: Executing the client code with a real subject:");
  const realSubject = new RealSubject();
  request(realSubject);

  console.log("");

  console.log("Client: Executing the same client code with a proxy:");
  const proxy = new Proxy(realSubject);
  request(proxy);
})();
