import { ISubject } from "../interface/ISubject";
import { RealSubject } from "./RealSubject";

export class RemoteProxy implements ISubject {
  private realSubject: RealSubject | null = null;
  private readonly remoteServerUrl: string = "https://jsonplaceholder.typicode.com/posts/1";

  private async connectToRemove(): Promise<void> {
    console.log("RemoteProxy: Connecting to remote server...");

    const response = await fetch(this.remoteServerUrl);

    if (!response.ok) {
      console.error("RemoteProxy: Failed to connect to remote server.");
      return;
    }

    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("RemoteProxy: Connected to remote server.");
    this.realSubject = new RealSubject();
  }

  async operation(): Promise<void> {
    if (this.realSubject === null) {
      await this.connectToRemove();
    }

    if (this.realSubject) {
      this.realSubject.operation();
    }
  }
}
