export interface IComponent {
  notify(message: string): void;
  receive(message: string): void;
}
