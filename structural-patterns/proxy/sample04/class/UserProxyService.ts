import { IUserService } from "../interface/IUserService";
import { RealUserService } from "./RealUserService";

export class UserProxyService implements IUserService {
  private realUserService: RealUserService;

  constructor() {
    this.realUserService = new RealUserService();
  }

  getUserById(userId: number): string {
    console.log(`Proxy: Before calling RealUserService.getUserById for userId ${userId}`);
    const user = this.realUserService.getUserById(userId);
    console.log(`Proxy: After calling RealUserService.getUserById for userId ${userId}`);
    return user;
  }
}
