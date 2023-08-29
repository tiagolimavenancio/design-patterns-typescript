import { IChair } from "../interfaces/IChair";
import { ITable } from "../interfaces/ITable";
import { ChairFactory } from "./ChairFactory";
import { TableFactory } from "./TableFactory";

interface IFurniture extends IChair, ITable {}

export default class FurnitureFactory {
  static getFurniture(furniture: string): IFurniture | undefined {
    try {
      if (["SmallChair", "MediumChair", "BigChair"].indexOf(furniture) > -1) {
        return ChairFactory.getChair(furniture);
      }

      if (["SmallTabel", "MediumTable", "BigTable"].indexOf(furniture) > -1) {
        return TableFactory.getTable(furniture);
      }

      throw new Error("Furniture not found");
    } catch (error) {
      throw new Error(error);
    }
  }
}
