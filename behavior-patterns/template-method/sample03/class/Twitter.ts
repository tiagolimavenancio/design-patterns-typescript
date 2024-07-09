import { Network } from "./Network";

export class Twitter extends Network {
  constructor(username: string, password: string) {
    super();
    this.username = username;
    this.password = password;
  }

  login(username: string, password: string): boolean {
    console.log("\nChecking user's parameters");
    console.log("Name: " + username);
    let hiddenPassword = "";

    for (let i = 0; i < this.password.length; i++) {
      hiddenPassword += "*";
    }

    console.log("Password: " + hiddenPassword);

    this.simulateNetworkLatency();
    console.log("\n\nLogIn success on Twitter");

    return true;
  }

  sendData(data: Uint8Array): boolean {
    const messagePosted = true;
    if (messagePosted) {
      console.log("Message: " + new TextDecoder().decode(data) + " was posted on Twitter");
      return true;
    } else {
      return false;
    }
  }

  logout(): void {
    console.log("User: " + this.username + " was logged out from Twitter");
  }

  private simulateNetworkLatency() {
    try {
      let i = 0;
      let dots = "";
      while (i < 10) {
        dots += ".";
        console.log(dots);
        new Promise((r) => setTimeout(r, 500));
        i++;
      }
    } catch (error) {
      return error;
    }
  }
}
