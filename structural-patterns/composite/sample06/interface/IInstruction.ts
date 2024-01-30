export interface IInstruction {
  name: string;
  execute(): boolean;
}
