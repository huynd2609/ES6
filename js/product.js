export class sanPham {
    //setter-getter
    //ID
    get id() {
        return this._id;
    }
    set id(v) {
        this._id = v;
    }
    //Tên
    get ten() {
        return this._ten;
    }
    set ten(v) {
        this._ten = v;
    }
    //Giá
    get gia() {
        return this._gia;
    }
    set gia(v) {
        this._gia = v;
    }
    //Mô tả
    get mota() {
        return this._mota;
    }
    set mota(v) {
        this._mota = v;
    }
    //Tình trạng
    get tinhtrang() {
        return this._tinhtrang;
    }
    set tinhtrang(v) {
        this._tinhtrang = v;
    }
    //Ảnh
    get anh() {
        return this._anh;
    }
    set anh(v) {
        this._anh = v;
    }
    //Contructor
    constructor(id, ten, gia, mota, tinhtrang, anh) {
        this.id = id;
        this.ten = ten;
        this.gia = gia;
        this.mota = mota;
        this.tinhtrang = tinhtrang;
        this.anh = anh;
    }
}
