import { DomesticEngineer } from "./class/DomesticEngineer";
import { Politician } from "./class/Politician";
import { Programmer } from "./class/Programmer";
import { ICommand } from "./interface/ICommand";

const procedureRequests = () => {
  const queue: ICommand[] = new Array<ICommand>();

  queue.push(new DomesticEngineer());
  queue.push(new Politician());
  queue.push(new Programmer());

  return queue;
};

const workOffRequests = (queue: ICommand[]) => {
  for (const command of queue) {
    command.execute();
  }
};

(function main() {
  const queue = procedureRequests();
  workOffRequests(queue);
})();
