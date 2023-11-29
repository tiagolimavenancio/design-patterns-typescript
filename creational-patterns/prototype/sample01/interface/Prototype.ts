export interface Prototype {
  clone(): Prototype;
  getName(): string;
  execute(): void;
}
