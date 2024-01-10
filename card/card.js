let keyLocalstorage = "danhsachItemggiohang"
//tao ra doi tuong gio hang
function taodoituongitemgiohang(idSanpham,soluong){
var itemGiohang = new Object();
itemGiohang.idSanpham = idSanpham;
itemGiohang.soluong = soluong;
return itemGiohang;
}
//lay ra cach item gio hang
function laytoanbodanhsachgiohang(){
let danhSachitemgiohang =new Array();
let jsonDanhsachItemGioHang = localStorage.getItem(keyLocalstorage);
if (jsonDanhsachItemGioHang== null)
  danhSachitemgiohang = JSON.parse(jsonDanhsachItemGioHang);
return danhSachitemgiohang;
}

