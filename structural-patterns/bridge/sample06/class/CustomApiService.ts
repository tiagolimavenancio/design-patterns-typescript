import { IApiService } from "../interface/IApiService";
import { UserService } from "./UserService";

export class CustomApiService implements IApiService {
    get<T>(): T {
        return UserService;
    }

    getAll<T>(): T[] {
        return [];
    }

    add<T>(entity: T): void {

    }

    update<T>(entity: T): void {

    }

    delete<T>(entity: T): void {

    }
}