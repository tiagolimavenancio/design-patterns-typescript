import { Order } from "./Order";
import { StockTrade } from "./StockTrade";

export class BuyStockOrder extends Order {
  private stockTrade: StockTrade;
  protected type = "buy";

  constructor(stockTrade: StockTrade) {
    super();
    this.stockTrade = stockTrade;
  }

  execute() {
    this.stockTrade.buy();
  }
}
