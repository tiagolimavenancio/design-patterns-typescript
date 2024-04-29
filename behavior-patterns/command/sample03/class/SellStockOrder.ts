import { Order } from "./Order";
import { StockTrade } from "./StockTrade";

export class SellStockOrder extends Order {
  private stockTrade: StockTrade;
  protected type = "sell";

  constructor(stockTrade: StockTrade) {
    super();
    this.stockTrade = stockTrade;
  }

  execute() {
    this.stockTrade.sell();
  }
}
