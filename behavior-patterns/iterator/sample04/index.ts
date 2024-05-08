import { IteratorPrint } from "./class/IteratorPrint";
import { MovieChannels } from "./class/MovieChannels";
import { SportChannels } from "./class/SportChannels";

(function main() {
  const sports = new SportChannels();
  console.log("Sports Channels");
  let it = new IteratorPrint(sports.createIterator());
  it.iterateList();

  const movies = new MovieChannels();
  console.log("Movie Channels");
  it = new IteratorPrint(movies.createIterator());
  it.iterateList();
})();
