import { Text } from "./class/Text";

(function main() {
  const text = new Text();

  text.writeText("Primeira linha do texto\n");
  text.writeText("Segunda linha do texto\n");
  text.writeText("Terceira linha do texto\n");

  text.readText();
  text.rollback();

  text.readText();
  text.rollback();

  text.readText();
  text.rollback();

  text.readText();
})();
