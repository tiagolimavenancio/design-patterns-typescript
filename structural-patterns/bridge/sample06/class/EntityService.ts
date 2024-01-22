import { IApiService } from "../interface/IApiService";

export abstract class EntityService {
    apiService: IApiService;

    constructor(apiService: IApiService) {
        this.apiService = apiService;
    }
}