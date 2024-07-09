export abstract class Network {
  public username: string = "";
  public password: string = "";

  constructor() {}

  public post(message: string): boolean {
    if (this.login(this.username, this.password)) {
      const encoder = new TextEncoder();
      const data: Uint8Array = encoder.encode(message);
      const result = this.sendData(data);
      this.logout();
      return result;
    }

    return false;
  }

  abstract login(username: string, password: string): boolean;
  abstract sendData(data: Uint8Array): boolean;
  abstract logout(): void;
}
