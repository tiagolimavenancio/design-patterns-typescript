import { dimension } from "../enum/Dimensions";
import { ITable } from "../interfaces/ITable";

class Table implements ITable {
  name = "";
  height = 0;
  width = 0;
  depth = 0;

  getDimension(): dimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
    };
  }
}

export class SmallTable extends Table {
  constructor() {
    super();
    this.name = "Small Table";
    this.width = 100;
    this.height = 100;
    this.depth = 100;
  }
}

export class MediumTable extends Table {
  constructor() {
    super();
    this.name = "Medium Table";
    this.width = 200;
    this.height = 200;
    this.depth = 200;
  }
}

export class BigTable extends Table {
  constructor() {
    super();
    this.name = "Big Table";
    this.width = 300;
    this.height = 300;
    this.depth = 300;
  }
}
