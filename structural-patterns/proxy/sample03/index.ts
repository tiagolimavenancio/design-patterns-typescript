import { DataBaseProxy } from "./class/DataBaseProxy";

(function main() {
  console.log("Access Hacker >(");
  const database = new DataBaseProxy("hacker", "1234");
  console.log(database.getUsersLength());
  console.log(database.getUsersConnected());

  console.log("Access Admin :)");
  const database2 = new DataBaseProxy("admin", "admin");
  console.log(database2.getUsersLength());
  console.log(database2.getUsersConnected());
})();
