import { IBus } from "../interface/IBus";

export class BusConnector<Messages> {
  private bus!: IBus<Messages>;

  connect(bus: IBus<Messages>) {
    this.bus = bus;
  }

  signal(message: Messages) {
    if (!this.bus) {
      throw new Error("Bus disconnected");
    }

    this.bus.notify(message);
  }
}
