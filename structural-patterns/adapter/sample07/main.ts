import { User } from "./class/User";

function main() {
  const poorshad = new User("poorshad");
  poorshad.addProfileViews();

  const views = poorshad.getProfileViews();
}

main();
