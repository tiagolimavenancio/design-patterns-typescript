import { IAuctioneer } from "../interface/IAuctioneer";

interface IProduct {
  name: string;
  price: number;
  auctioneer?: IAuctioneer;
}

export class Product {
  public name: string = "";
  public price: number = 0;
  public auctioneer?: IAuctioneer;

  constructor(product: IProduct) {
    this.name = product.name || "Unknown";
    this.price = product.price || 10;
  }
}
