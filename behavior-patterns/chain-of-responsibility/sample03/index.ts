import { Server } from "./class/Server";
import { REQUEST_PER_MINUTE, USERS } from "./constants/userConstants";
import { RoleMiddleware } from "./middlewares/RoleMiddleware";
import { ThrottlingMiddleware } from "./middlewares/ThrottlingMiddleware";
import { UserExistsMiddleware } from "./middlewares/UserExistsMiddleware";

(function main() {
  const server = new Server();
  server.register(USERS.ADMIN.email, USERS.ADMIN.password);
  server.register(USERS.USER.email, USERS.USER.password);

  const middleware = new ThrottlingMiddleware(REQUEST_PER_MINUTE);
  middleware.setNext(new UserExistsMiddleware(server));
  middleware.setNext(new RoleMiddleware());

  server.setMiddleware(middleware);

  let success = false;
  do {
    console.log("...Authentication Software...");
    const email = USERS.USER.email;
    const password = USERS.USER.password;
    success = server.logIn(email, password);
  } while (!success);
})();
