import { ISubjectCache } from "../interface/ISubjectCache";
import { RealSubjectCache } from "./RealSubjectCache";

export class CacheProxy implements ISubjectCache {
  private realSubject: RealSubjectCache;
  private cache: Map<string, string> = new Map();

  constructor(realSubject: RealSubjectCache) {
    this.realSubject = realSubject;
  }

  async request(resource: string): Promise<string> {
    if (this.cache.has(resource)) {
      console.log(`CacheProxy: Retrieving response from cache for ${resource}`);
      return this.cache.get(resource)!;
    } else {
      const response = await this.realSubject.request(resource);
      console.log(`CacheProxy: Caching response for ${resource}`);
      this.cache.set(resource, response);
      return resource;
    }
  }
}
