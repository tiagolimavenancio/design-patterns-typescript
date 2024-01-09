export interface Logger {
  info(message: string): Promise<void>;
}
