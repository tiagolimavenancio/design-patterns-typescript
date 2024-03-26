import { TableCell } from "./TableCell";

export class TableCellFactory {
  static tableCells = new Map<number, TableCell>();

  static getTableCell(column: number, width: number): TableCell {
    let tableCell = this.tableCells.get(column);

    if (tableCell) return tableCell;

    tableCell = new TableCell(width);
    this.tableCells.set(column, tableCell);

    return tableCell;
  }

  static getCellObjectCount(): number {
    return this.tableCells.size;
  }
}
