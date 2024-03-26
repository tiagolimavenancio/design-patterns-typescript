import { TableCellFactory } from "./class/TableCellFactory";

(function main() {
  const columnWidths: number[] = [3, 6, 2, 5, 10];

  for (let row = 0; row < 10; row++) {
    for (let column = 0; column < columnWidths.length; column++) {
      const tableCell = TableCellFactory.getTableCell(column, columnWidths[column]);
      tableCell.setText(row + "-" + column);
      tableCell.draw();
    }
  }
})();
