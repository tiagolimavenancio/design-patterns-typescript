import { Chat } from "./class/Chat";
import { User } from "./class/User";

(function main() {
  const chat = new Chat();

  const user1 = new User(chat);
  const user2 = new User(chat);

  chat.add("jose", user1);
  chat.add("maria", user2);

  user1.sendMessageTo("maria", "Hi, Jose.");
  user2.sendMessageTo("jose", "Hi! How are you?.");
})();
