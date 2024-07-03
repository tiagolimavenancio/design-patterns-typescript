// 1. Create a "wrapper" class that models the state machine

import { A } from "./A";
import { B } from "./B";
import { C } from "./C";
import { State } from "./State";

export class FSM {
  private states: State[] = [new A(), new B(), new C()];
  private current: number = 0;
  private transition: number[][] = [
    [2, 1, 0],
    [0, 2, 1],
    [1, 2, 2],
  ];

  private next(msg: number): void {
    this.current = this.transition[this.current][msg];
  }

  on(): void {
    this.states[this.current].on();
    this.next(0);
  }

  off(): void {
    this.states[this.current].off();
    this.next(1);
  }

  ack(): void {
    this.states[this.current].ack();
    this.next(2);
  }
}
