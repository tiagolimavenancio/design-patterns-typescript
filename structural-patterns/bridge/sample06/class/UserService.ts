import { IApiService } from "../interface/IApiService";
import { IUser } from '../interface/IUser';
import { EntityService } from "./EntityService";

export class UserService extends EntityService {
    activeUser: IUser;

    constructor(apiService: IApiService) {
        super(apiService);
    }

    addNewUser(user: IUser) {
        this.apiService.add(user);
    }

    setActiveUserEmail(email: string) {
        this.activeUser.email = email;
        this.apiService.update(this.activeUser);
    }
}