import { ProxyImage } from "./class/ProxyImage";

(function main() {
  const image1 = new ProxyImage("test_10mb.jpg");
  const image2 = new ProxyImage("test_10mb.jpg");

  image1.display();
  image2.display();
})();
