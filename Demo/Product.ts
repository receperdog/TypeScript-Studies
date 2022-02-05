export class Product {
  id: number;
  name: string;
  category: string;
  price: string;

  constructor(id, name, category, price) {
    this.category = category;
    this.name = name;
    this.id = id;
    this.price = price;
  }
}
