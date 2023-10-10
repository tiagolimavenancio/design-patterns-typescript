import { dimension } from "../enum/Dimensions";
import { IChair } from "../interfaces/IChair";

class Chair implements IChair {
  name = "";
  width = 0;
  height = 0;
  depth = 0;

  getDimensions(): dimension {
    return {
      width: this.width,
      height: this.height,
      depth: this.depth,
    };
  }
}

export class SmallChair extends Chair {
  constructor() {
    super();
    this.name = "Small Chair";
    this.height = 40;
    this.width = 40;
    this.depth = 40;
  }
}

export class MediumChair extends Chair {
  constructor() {
    super();
    this.name = "Medium Chair";
    this.height = 60;
    this.width = 60;
    this.depth = 60;
  }
}

export class BigChair extends Chair {
  constructor() {
    super();
    this.name = "Big Chair";
    this.height = 80;
    this.width = 80;
    this.depth = 80;
  }
}
