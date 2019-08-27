import { sanPham } from "./product";
export class QuanLyHang {
    constructor() {
        this.products = [];
        console.log("Ok babe");
    }
    //Lấy ra tất cả sản phẩm
    getProducts() {
        return [];
    }
    //Lấy ra sản phẩm theo ID
    getProductById() {
        var product = new sanPham(0o1, 'Bàn làm việc cao cấp 1421 (60 x 40 x 90 cm)', 399000, "Cung cấp bởi Tiki Trading", true, "images/ban-lam-viec.jpg");
        return product;
    }
    //Thêm sản phẩm vào
    addProduct() {
    }
    //Hiển thị sản phẩm
    showProduct() {
        return '';
    }
}
