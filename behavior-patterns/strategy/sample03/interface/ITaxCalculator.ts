import { Employee } from "../model/Employee";

export interface ITaxCalculator {
  calculate(employee: Employee): number;
}
