import { UserProxyService } from "./class/UserProxyService";

(function main() {
  const userService = new UserProxyService();
  const userResult = userService.getUserById(123);
  console.log(`Result: ${userResult}`);
})();
