import Redis from "ioredis";
import { IStore } from "../interface/IStore";

export class RedisClient implements IStore {
  private store;

  constructor() {
    this.store = new Redis();
  }

  public get = (key: string): Promise<string | null> => {
    return this.store.get(key);
  };

  public set = (key: string, value: string): Promise<string | null> => {
    return this.store.set(key, value);
  };
}
