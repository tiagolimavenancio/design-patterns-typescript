import { Employee } from "./model/Employee";
import { Role } from "./constants/EmployeesEnum";

(function main() {
  const developer = new Employee(Role.DEVELOPER, 2100);
  console.log(developer.getCalculateTax());

  const manager = new Employee(Role.MANAGER, 4000);
  console.log(manager.getCalculateTax());
})();
