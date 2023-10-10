import { dimension } from "../enum/Dimensions";

export interface IChair {
  name: string;
  height: number;
  width: number;
  depth: number;

  getDimensions(): dimension;
}
