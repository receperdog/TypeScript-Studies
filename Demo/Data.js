"use strict";
exports.__esModule = true;
exports.Data = void 0;
var Product_1 = require("./Product");
var Data = /** @class */ (function () {
    function Data() {
        this.products = new Array(new Product_1.Product(1, "Water", "Drink", 1), new Product_1.Product(2, "Fruit Juice", "Drink", 10), new Product_1.Product(3, "Tea", "Drink", 100), new Product_1.Product(4, "Coke", "Drink", 1000), new Product_1.Product(5, "Mineral Water", "Drink", 10000));
    }
    Data.prototype.getProducts = function () {
        return this.products;
    };
    return Data;
}());
exports.Data = Data;
