export interface IStore {
  set(key: string, value: string): Promise<string | null>;
  get(key: string): Promise<string | null>;
}
