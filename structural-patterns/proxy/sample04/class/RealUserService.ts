import { IUserService } from "../interface/IUserService";

export class RealUserService implements IUserService {
  getUserById(userId: number): string {
    return `User with id ${userId} is found`;
  }
}
