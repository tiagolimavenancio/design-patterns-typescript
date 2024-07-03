import { CancelledOrderState } from "../class/CancelledOrderState";
import { OrderBeingPreparedState } from "../class/OrderBeingPreparedState";
import { OrderShippedState } from "../class/OrderShippedState";
import { PaymentPendingState } from "../class/PaymentPendingState";
import { IState } from "../interface/IState";

export class Order {
  cancelledOrderState: IState;
  paymentPendingState: IState;
  orderShippedState: IState;
  orderBeingPreparedState: IState;

  currentState!: IState;

  constructor() {
    this.cancelledOrderState = new CancelledOrderState(this);
    this.paymentPendingState = new PaymentPendingState(this);
    this.orderShippedState = new OrderShippedState(this);
    this.orderBeingPreparedState = new OrderBeingPreparedState(this);

    this.setState(this.paymentPendingState);
  }

  public setState(state: IState) {
    this.currentState = state;
  }

  public getState(): IState {
    return this.currentState;
  }
}
