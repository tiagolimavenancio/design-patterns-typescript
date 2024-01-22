export interface IApiService {
    get<T>(): T;
    getAll<T>(): T[];
    add<T>(entity: T): void;
    update<T>(entity: T): void;
    delete<T>(entity: T): void;
}