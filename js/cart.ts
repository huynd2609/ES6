import { sanPham } from "./product";
import { productcart } from './productincart';

class QuanLyGioHang {
    private CartItems : productcart[] = [];
    
    addProductCart(product  : sanPham, amount : number) : void {}
    updateProductCart(product : sanPham, amount : number) : void {}
    kiemtraProduct() : void {}
    countQuantity() : number {return}
    charge() : number {return}
    showCart() : string {return}

    constructor() {}
}