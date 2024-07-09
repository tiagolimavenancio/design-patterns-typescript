import { Facebook } from "./class/Facebook";
import { Network } from "./class/Network";
import { Twitter } from "./class/Twitter";

function clientCode(network: Network, message: string) {
  network.post(message);
}

(function main() {
  let network: Network;

  const username = "James";
  const password = "123456";
  const message = "Hi, guys. Hello, world! Lorem ipsum dolor sit amet";

  network = new Facebook(username, password);
  clientCode(network, message);

  network = new Twitter(username, password);
  clientCode(network, message);
})();
