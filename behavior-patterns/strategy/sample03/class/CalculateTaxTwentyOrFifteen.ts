import { ITaxCalculator } from "../interface/ITaxCalculator";
import { Employee } from "../model/Employee";

export class CalculateTaxTwentyOrFifteen implements ITaxCalculator {
  calculate(employee: Employee): number {
    if (employee.getBaseSalary() > 3500) {
      return employee.getBaseSalary() * 0.8;
    }
    return employee.getBaseSalary() * 0.85;
  }
}
