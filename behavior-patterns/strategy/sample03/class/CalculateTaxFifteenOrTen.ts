import { ITaxCalculator } from "../interface/ITaxCalculator";
import { Employee } from "../model/Employee";

export class CalculateTaxFifteenOrTen implements ITaxCalculator {
  calculate(employee: Employee): number {
    if (employee.getBaseSalary() > 2000) {
      return employee.getBaseSalary() * 0.85;
    }
    return employee.getBaseSalary() * 0.9;
  }
}
