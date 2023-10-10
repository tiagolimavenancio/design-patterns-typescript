import { ITable } from "../interfaces/ITable";
import { BigTable, MediumTable, SmallTable } from "./Table";

export class TableFactory {
  static getTable(table: string): ITable {
    switch (table) {
      case "BigTable":
        return new BigTable();
      case "MediumTable":
        return new MediumTable();
      case "SmallTable":
        return new SmallTable();
      default:
        throw new Error("Table not found");
    }
  }
}
