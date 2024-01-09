export interface CloudLogger {
  sendToServer(message: string, type: string): Promise<void>;
}
