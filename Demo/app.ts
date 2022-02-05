import { Product } from "./Product";
import { ProductService } from "./ProductService";

let _productService = new ProductService();
let result;

result = _productService.getProducts();
console.log(result);
result = _productService.getById(3);
console.log(result);

let p = new Product(5, "Ali", "Deneme", 125);
_productService.saveProducts(p);
result = _productService.getProducts();
console.log(result);
