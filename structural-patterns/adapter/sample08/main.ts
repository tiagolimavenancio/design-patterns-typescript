import { JsonData } from "./class/JsonData";
import { JsonToXmlAdapter } from "./class/JsonToXmlAdapter";

function main() {
  const newData = new JsonData();
  const jsonAdapter = new JsonToXmlAdapter(newData);

  jsonAdapter.recieveXml();
}

main();
