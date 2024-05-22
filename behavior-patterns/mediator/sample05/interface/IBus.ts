export interface IBus<Messages> {
  notify(message: Messages): void;
}
