import { Data } from "./Data";
import { IProductService } from "./IProductService";
import { Product } from "./Product";

export class ProductService implements IProductService {
  private data: Data;
  private products: Array<Product>;

  constructor() {
    this.data = new Data();
    this.products = new Array<Product>();
    this.data.getProducts().forEach((p) => this.products.push(p));
  }
  getById(id: number): Product {
    return this.products.filter((p) => p.id === id)[0];
  }
  getProducts(): Product[] {
    return this.products;
  }
  saveProducts(product: Product): void {
    if (product.id == 0 || product.id == null) {
      product.id = this.generateId();
      this.products.push(product);
    } else {
      let index = this.products.indexOf(product);
      this.products.splice(index, 1, product);
    }
  }

  deleteProduct(product: Product): void {
    let index = this.products.indexOf(product);
    if (index > 0) {
      this.products.splice(index, 1);
    }
  }

  private generateId(): number {
    let id = 1;
    while (this.getById(id) != null) {
      id++;
    }
    return id;
  }
}
