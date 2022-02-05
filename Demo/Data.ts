import { Product } from "./Product";

export class Data {
  private products: Array<Product>;

  constructor() {
    this.products = new Array<Product>(
      new Product(1, "Water", "Drink", 1),
      new Product(2, "Fruit Juice", "Drink", 10),
      new Product(3, "Tea", "Drink", 100),
      new Product(4, "Coke", "Drink", 1000),
      new Product(5, "Mineral Water", "Drink", 10000)
    );
  }

  getProducts(): Product[] {
    return this.products;
  }
}
