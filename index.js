//load noi dung
window.addEventListener('load', function() {
    //taomenu();
    taoDanhMuc();
    layurl();
    //phanTrang();
    TimKiem();
    taoDanhMucFooter1();
    taoDanhMucFooter2();
   	mucsp();
    addSp();
    layTenDangNhap();
    csbaohanh();
});
var danhmucfooter1 = [{
    name: 'Hướng dẫn mua hàng',
    key: 'huongdanmuahang'
}, {
    name: 'Đặt hàng trực tuyến',
    key: 'dathangtructuyen'
}, {
    name: 'Chính sách giao-nhận',
    key: 'chinhsachgiaonhan'
} ,];
//tao danh muc footer 1
function taoDanhMucFooter1() {
    var d = "";
    for (var i = 0; i < danhmucfooter1.length; i++) {
        if(i==0||i==1)
        d = d + '<a href="index.html"><ul><li type="circle">' + danhmucfooter1[i].name + '</ul></li></a>';
        else
        d=d+'<a href="index.html?'+danhmucfooter1[i].key+'"><ul><li type="circle">' + danhmucfooter1[i].name + '</ul></li></a>'
    }
    d = '<h3> Hướng dẫn</h3>' + d;
    //alert(d);
    document.getElementById("danhmucfooter1").innerHTML = d;
}
var danhmucfooter2 = [{
    name: 'Bảo hành sản phẩm',
    key: 'baohanhsanpham'
}, {
    name: 'Chính sách đổi trả',
    key: 'chinhsachdoitra'
}, {
    name: 'Khách hàng thân thiết',
    key: 'khachhangthanthiet'
}, {
    name: 'Dịch vụ',
    key: 'dichvu'
}, ];
//tao danh muc footer 2
function taoDanhMucFooter2() {
    s = "";
    for (var i = 0; i < danhmucfooter2.length; i++) {
        s = s + '<a href="index.html?' + danhmucfooter2[i].key + '"><ul><li type="circle">' + danhmucfooter2[i].name + '</ul></li></a>';
    }
    s = '<h3> Dịch vụ</h3>' + s;
    document.getElementById("danhmucfooter2").innerHTML = s;

}
function csbaohanh(){
    var s="";
    var baohanhsp="baohanhsanpham";
    var csgiaonhan="chinhsachgiaonhan";
    var csdoihang="chinhsachdoitra"
    var url=window.location.href;
    var chuoicon=url.split("?");
    if(chuoicon.length==1) return false;
    if(chuoicon[1].indexOf(baohanhsp) != -1)
      { s=s+`<div><img src="img/logobaohanh.jpg" style="width:669px;height:164px"/></div><div style="text-align:left"><p style="font-size:40px"> Chính Sách Bảo Hành của Shop Thời trang cao cấp CHANEL</p><br>

 

<p style="font-size:30px">(Bảo hành sản phẩm là khắc phục sự cố hư hỏng, sự cố kỹ thuật xảy ra do lỗi của nhà sản xuất.)</p><br>

<p style="color:red;font-size:30px">1. Thời gian bảo hành.</p><br>
<p style="font-size:18px">1 tháng kể từ ngày nhận hàng.</p><br>

<p style="color:red;font-size:30px">2. Điều kiện bảo hành.</p><br>
<p style="font-size:18px">Các sản phẩm bảo hành phải còn mới, không bị dơ bẩn.<br>
Sản phẩm bị thủng, rách… do lỗi của nhà sản xuất.<br>
Sản phẩm bị in màu lem, bay màu, in sai quy cách.</p><br>
<p style="color:red;font-size:30px">3. Những trường hợp không được bảo hành.</p><br>
<p style="font-size:18px"Sử dụng sản phẩm sai với hướng dẫn sử dụng.<br>
Sản phẩm bị hư do thiên tai, lũ lụt, hỏa hoạn....<br>
Sản phẩm đã qua sử dụng bị dơ bẩn, đã được sữa chữa bởi người sử dụng.<br>
Sản phẩm hư hỏng do tác động bên ngoài, biến dạng, rách thủng, ẩm mốc, cháy hoặc do con người sử dụng làm hỏng.</p><br>
<p style="color:red;font-size:30px">4. Hình thức bảo hành.</p><br>
<p style="font-size:18px"Thu hồi và sản xuất mới những sản phẩm không đạt yêu cầu.<br>
Sửa lại những sản phẩm bị lỗi nhỏ.</p><br>
<p style="color:red;font-size:30px">5. Địa điểm nhận bảo hành.</p><br>
<p style="font-size:20px">Shop thời trang CHANEL<br><br>

Địa chỉ: 273 An Dương Vương, P.2, Quận 5, TP HCM<br>

Điện thoại: 0375298096 *** 0916153169<br>

Email: thoitrangchanel@gmail.com</p></div>`  
document.getElementById("baohanh").innerHTML=s;
} 
    else if(chuoicon[1].indexOf(csgiaonhan) != -1)
    {
        s=s+`<div><img src="img/vanchuyenhang.jpg"/></div><div style="text-align:left"><p style="font-size:40px">Chính Sách Vận Chuyển - Giao Nhận</p><br>

<p style="font-size:30px">Shop Thời Trang cao cấp Chanel</p><br>

<p style="font-size:30px">Tel : (08) 98.40.9899 --- 0934.020.899<br>
Giờ làm việc: Sáng: 8h – 12h, Chiều: 13h30 – 5h30<br>

Ngày làm việc từ thứ 2 đến thứ 7.</p>

<p style="font-size:30px;color:red;">1. Thời gian giao hàng.<br>
    Shop áp dụng chính sách giao hàng như sau:</p><br>

<p style="font-size:20px">Khu vực giao hàng:<br> 
    Nội thành:                                   1 – 2 ngày( trừ chủ nhật)<br>
    Ngoại thành:                                2 – 3 ngày (trừ chủ nhật)<br>
</p>
<p  style="font-size:30px;color:red;">2. Phí giao hàng</p>
<p  style="font-size:20px">Đối với KH trong thành phố,Shop sẽ giao hàng miễn phí với đơn hàng trị giá trên 2.000.000 VNĐ.<br>

Đối với đơn hàng dưới 2.000.000 VNĐ, Shop sẽ tính phí giao hàng là 50.000 VNĐ/ lần giao hàng.<br>

Đối với khách hàng ở các tỉnh, Công ty sẽ hỗ trợ mang hàng ra bến xe, chuyển theo địa chỉ khách hàng yêu cầu. Nhưng phí gửi hàng với nhà xe, khách hàng thanh toán với nhà xe.</p></div>`
    document.getElementById("baohanh").innerHTML=s;}
    else if(chuoicon[1].indexOf(csdoihang)!=-1)
        { s=s+`<div style="text-align:left;font-size:20px"><p style="font-size:40px"><h1>Chính sách đổi hàng</h1></p><br>
<p style="font-size:20px"><h1>Loại sản phẩm áp dụng:</h1> Sản phẩm nguyên giá.</p><br>

<p style="font-size:20px"><h1>Thời gian đổi sản phẩm:</h1><br>

- Sản phẩm mua tại hệ thống Showroom: Trong vòng 15 ngày kể từ ngày mua.<br>

- Sản phẩm mua Online: Trong vòng 30 ngày kể từ ngày mua.<br>

- Ngày mua: Là ngày ghi trên hóa đơn bán hàng.<br>
<h1>Điều kiện ĐỔI sản phẩm:</h1>

- Sản phẩm chưa sử dụng còn nguyên tem mác, hóa đơn và còn mới 100%<br>

- Sản phẩm thỏa mãn điều kiện của Thời hạn đổi sản phẩm.<br>

- Sản phẩm đã qua sử dụng nhưng bị lỗi kỹ thuật do sản xuất.<br>

- Sản phẩm không bị làm dơ, bẩn, hư hỏng bởi những tác nhân bên ngoài sau khi mua sản phẩm.<br>

- Hàng hóa được xác định nguồn gốc mua tại Hệ thống showroom Aristino và kênh bán hàng online của Aristino<br>

<h1>Sản phẩm KHÔNG nhận đổi:</h1>

- Sản phẩm đã sử dụng. Sản phẩm có mùi nước hoa, hóa mỹ phẩm.<br>

- Sản phẩm quá thời hạn đổi.<br>

- Sản phẩm không còn nhãn mác, tem bảo hành, sử dụng sai quy cách, bảo quản va chạm, ma sát với vật cứng làm trầy xước, hư hỏng<br>

- Không có hóa đơn mua hàng<br>

- Các phụ kiện của sản phẩm không còn đầy đủ<br>

- Sản phẩm quần áo lót, bít tất.<br>

- Sản phẩm thuộc nhóm hàng giảm giá, khuyến mại, trong chương trình giảm giá hàng tháng, thanh lý hàng tồn kho, hàng lủng size.<br>

- Quý khách muốn thay đổi chủng loại, mẫu mã nhưng không thông báo trước trong thời gian quy định đổi hàng<br>

<h1>Giá trị đổi hàng:</h1>

- Sản phẩm đổi mới sẽ có giá trị ngang bằng hoặc lớn hơn giá trị sản phẩm đã mua trước đó.<br>

- Trường hợp sản phẩm mới có giá trị cao hơn khách hàng phải trả thêm phần tiền phát sinh thêm.<br>

Địa điểm áp dụng đổi sản phẩm: Sản phẩm chỉ được phép đổi khi Quý khách mua tại hệ thống các showroom của ARISTINO trên toàn quốc hoặc mua online qua website.<br>

<h1>Quy trình xử lý thủ tục đổi hàng:</h1>

- Khách hàng liên hệ trực tiếp và mang sản phẩm tới hệ thống Showroom Aristino nơi quý khách mua hàng, hoặc showroom gần nhất, hoặc phòng CSKH của Aristino.<br>

- Aristino sẽ kiểm tra tình trạng sản phẩm và tiến hành đổi hàng với những trường hợp sản phẩm đáp ứng tiêu chí của điều kiện đổi hàng trong chính sách đã cam kết.<br>

- Sau khi tiến hành kiểm tra xác minh, nhân viên CSKH của Aristino sẽ liên hệ bằng điện thoại hoặc email để xác nhận thông tin đổi hàng/ hoặc bảo hành...<br>

- Quy trình xử lý thủ tục đổi hàng được thực hiện trong vòng 2 - 5 ngày tính từ lúc Aristino nhận đủ thông tin và các giấy tờ theo quy định từ phía khách hàng.<br>

<h1>Quy định về tính phí vận chuyển:</h1>

- Khách hàng chuyển sản phẩm đến Showroom hoặc phòng CSKH : Phí vận chuyển khách hàng chịu<br>

- Sản phẩm bảo hành xong, công ty chuyển trả sản phẩm cho khách hàng: Công ty chịu phí vận chuyển (nếu có phát sinh)<br>

- Đổi hàng do phát sinh từ phía khách hàng (chọn sai sản phẩm, màu sắc, kích cỡ…): Khách hàng chịu phí vận chuyển 2 chiều.<br>

- Sản phẩm lỗi kỹ thuật: Công ty chịu phí vận chuyển 2 chiều.</p></div>`
document.getElementById("baohanh").innerHTML=s;
}
}
