import { AbstractSaiyan } from "./AbstractSaiyan";

export class NullSaiyan extends AbstractSaiyan {
  public getName(): string {
    return "No Saiyan with this name";
  }

  public toString(): string {
    return "Not available in Saiyan Database.";
  }
}
