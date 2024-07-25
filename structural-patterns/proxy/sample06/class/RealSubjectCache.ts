import { ISubjectCache } from "../interface/ISubjectCache";

export class RealSubjectCache implements ISubjectCache {
  async request(resource: string): Promise<string> {
    console.log(`RealSubject: Fetching resource from ${resource}`);

    await new Promise((resolve) => setTimeout(resolve, 1000));
    return `Response from ${resource}`;
  }
}
