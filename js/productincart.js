"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var productcart = /** @class */ (function () {
    function productcart(sanpham, amount) {
        if (amount === void 0) { amount = 1; }
        this.amount = 1;
        this.sanpham = sanpham;
        this.amount = amount;
    }
    productcart.prototype.calculationPrice = function () {
        return;
    };
    productcart.prototype.showProductInCart = function () {
        return;
    };
    return productcart;
}());
exports.productcart = productcart;
