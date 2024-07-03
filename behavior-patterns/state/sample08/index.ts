import { AdminState } from "./class/AdminState";
import { UserContext } from "./class/UserContext";
import { UserState } from "./class/UserState";

(function main() {
  const adminState = new AdminState();
  const userState = new UserState();

  const context = new UserContext(adminState);

  // Admin
  context.viewDashboard();
  context.editContent();

  context.changeState(userState);

  // User
  context.viewDashboard();
  context.editContent();
})();
