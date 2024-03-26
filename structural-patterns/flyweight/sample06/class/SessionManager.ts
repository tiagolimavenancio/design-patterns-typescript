import { Session } from "./Session";

export class SessionManager {
  private sessions: { [key: string]: Session } = {};

  getSessions(userId: string): Session {
    if (!this.sessions[userId]) {
      this.sessions[userId] = new Session(userId);
    }

    return this.sessions[userId];
  }
}
