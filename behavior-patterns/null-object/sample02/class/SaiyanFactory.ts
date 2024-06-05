import { AbstractSaiyan } from "./AbstractSaiyan";
import { NullSaiyan } from "./NullSaiyan";
import { RealSaiyan } from "./RealSaiyan";

export class SaiyanFactory {
  public saiyans = [
    { name: "Son Goku", power: 1000 },
    { name: "Son Gohan", power: 800 },
    { name: "Vegeta", power: 950 },
  ];

  public getSaiyan(name: string): AbstractSaiyan {
    for (const saiyan of this.saiyans) {
      if (saiyan.name === name) {
        return new RealSaiyan(saiyan);
      }
    }

    return new NullSaiyan();
  }
}
