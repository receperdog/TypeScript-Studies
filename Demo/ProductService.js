"use strict";
exports.__esModule = true;
exports.ProductService = void 0;
var Data_1 = require("./Data");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.data = new Data_1.Data();
        this.products = new Array();
        this.data.getProducts().forEach(function (p) { return _this.products.push(p); });
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0];
    };
    ProductService.prototype.getProducts = function () {
        return this.products;
    };
    ProductService.prototype.saveProducts = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product);
        }
        else {
            var index = this.products.indexOf(product);
            this.products.splice(index, 1, product);
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1);
        }
    };
    ProductService.prototype.generateId = function () {
        var id = 1;
        while (this.getById(id) != null) {
            id++;
        }
        return id;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
