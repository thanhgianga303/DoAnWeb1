
window.addEventListener('load', function() {
   HienThiSanPham();
   TimKiem();
   taoDanhMuc();

   taoDanhMucFooter1();
   taoDanhMucFooter2();
  
});
function HienThiSanPham(){
    var url=window.location.href;
    var params=url.split("?");
    var chuoicon0=params[0];//chitietsanpham.html
    var chuoicon1=params[1];//SP...
     var s="";
    for(i=0;i<sp.length;i++)
    {
        if(sp[i].masp==chuoicon1) {
            s=`
            <div class="group flexContain">
                <div><img src="`+sp[i].hinh+`"/></div>
                <div style="border:solid 1px #ddd;border-radius:5px" id="thongtin">
                    <div style="border:solid 1px #ddd;;border-radius:5px;background-color:#f8f8f8;">
                        <div style="font-size:30px;margin-top:10px" id="ten">`+sp[i].tensp+ `</div>
                        <div style="font-size:30px;margin-top:10px" id="masp">`+sp[i].masp+ `</div>
                        <div style="font-size:25px;color:red;margin-top:10px" id="gia">đ `+sp[i].gia+ `</div>
                    </div>
                    <a href="giohang.html" onclick="themVaoGioHang();">
                        <div id="giohang">Thêm vào giỏ hàng</div>
                    </a>
                </div>
            </div>`;
        }
    }
      document.getElementById("chitietsp").innerHTML = s;
}
function sanPham(ten,gia){
    this.ten=ten|| "";
    this.gia=gia|| "";
}
function getlistSanPham(){
    var data=JSON.parse(window.localStorage.getItem("listSanPham")) || [];
    var l = [];
    for(var d of data){
        l.push(d);
    }
    return l;
}
function getUser(){
  return JSON.parse(window.localStorage.getItem("User"))||[];
}
function themVaoGioHang(){
    var user=JSON.parse(window.localStorage.getItem("User"));
    if(user==null){
      alert("Vui lòng đăng nhập để mua hàng");
      return;
     }
    var tenSanPham = document.getElementById("ten").innerHTML;//lay gia tri cua div
    var giaSanPham = document.getElementById("gia").innerHTML;
    var newSanPham= new sanPham(tenSanPham,giaSanPham);
     var spDaCo =getlistSanPham();
     // var giaDaCo= JSON.parse(localStorage.getItem("listGia")); // lay ra
    // // if(!spDaCo) spDaCo = [];
    // // if(!giaDaCo) giaDaCo=[];
     spDaCo.push(newSanPham); // cap nhat
    // // giaDaCo.push(giaSanPham);
     window.localStorage.setItem("listSanPham", JSON.stringify(spDaCo));
    // // window.localStorage.setItem("listGia", JSON.stringify(giaDaCo));
    }
     


