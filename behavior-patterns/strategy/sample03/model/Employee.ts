import { CalculateTaxFifteenOrTen } from "../class/CalculateTaxFifteenOrTen";
import { CalculateTaxTwentyOrFifteen } from "../class/CalculateTaxTwentyOrFifteen";
import { Role } from "../constants/EmployeesEnum";
import { ITaxCalculator } from "../interface/ITaxCalculator";

export class Employee {
  protected baseSalary: number;
  protected role: Role = Role.EXECUTIVE;
  protected strategy!: ITaxCalculator;

  constructor(role: number, baseSalary: number) {
    this.baseSalary = baseSalary;
    switch (role) {
      case Role.DEVELOPER:
        this.strategy = new CalculateTaxFifteenOrTen();
        this.role = Role.DEVELOPER;
        break;

      case Role.EXECUTIVE:
        this.strategy = new CalculateTaxTwentyOrFifteen();
        this.role = Role.EXECUTIVE;
        break;

      case Role.DBA:
        this.strategy = new CalculateTaxFifteenOrTen();
        this.role = Role.DBA;
        break;

      case Role.MANAGER:
        this.strategy = new CalculateTaxTwentyOrFifteen();
        this.role = Role.MANAGER;
        break;

      default:
        break;
    }
  }

  getCalculateTax(): number {
    return this.strategy.calculate(this);
  }

  getBaseSalary(): number {
    return this.baseSalary;
  }
}
