import { IStore } from "../interface/IStore";
import { mongoClient } from "../service/mongoConnector";

export class MongoAdapter implements IStore {
  constructor() {}

  public async set(key: string, value: string) {
    const client = await mongoClient();
    const result = await client.insertOne({ key, value });

    if (result.result.n === 1) {
      return "OK!";
    } else {
      return null;
    }
  }

  public async get(key: string) {
    const client = await mongoClient();
    const result = await client.findOne({ key });

    if (result) {
      return result.value;
    } else {
      return null;
    }
  }
}
