import { sanPham } from "./product";

export class productcart {
    private sanpham : sanPham;
    private amount : number = 1;

    constructor(sanpham : sanPham, amount : number = 1) {
        this.sanpham = sanpham;
        this.amount = amount;
    }

    calculationPrice() : number {
        return
    }

    showProductInCart() : string {
        return
    }
}