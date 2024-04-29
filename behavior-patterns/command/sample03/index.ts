import { Agent } from "./class/Agent";
import { BuyStockOrder } from "./class/BuyStockOrder";
import { SellStockOrder } from "./class/SellStockOrder";
import { StockTrade } from "./class/StockTrade";

(function main() {
  const stock = new StockTrade();
  const buyStock = new BuyStockOrder(stock);
  const sellStock = new SellStockOrder(stock);
  const agent = new Agent();

  agent.placeOrder(buyStock);
  agent.placeOrder(sellStock);

  console.log(agent.listOrders());
})();
