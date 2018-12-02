// JavaScript Document
var danhmuc = [{
    name: 'ÁO THUN',
    key: 'aothun'
}, {
    name: 'ÁO KHOÁC',
    key: 'aokhoac'
}, {
    name: 'ÁO SƠ MI',
    key: 'aosomi'
}, {
    name: 'QUẦN DÀI',
    key: 'quandai'
}, {
    name: 'QUẦN SHORT',
    key: 'quanshort'
}, ];

function taoDanhMuc() {
    var s = "";
    var url = window.location.href;
    var params = url.split('?');
    //alert(params[0]);
    //alert(params[1]);
    var chuoicon = params[1];//aokhoac&0
    var s = "";
    var dem = 0;
    var lienket = "";
    if (params.length > 1) {
        chuoicon = chuoicon.split('&');
        //alert("chuoi con");
        //alert(chuoicon[1]);
        var vitri = chuoicon[1];//0
        var loaisp = chuoicon[0];//aokhoac
    }
    for (var i = 0; i < danhmuc.length; i++) {
        var color = (loaisp==danhmuc[i].key?"red":"black");
        s = s + '<a href="index.html?' + danhmuc[i].key + '&0"><div style="color:'+color+'">' + danhmuc[i].name + '</div></a>';
    }
    //alert(s);
    document.getElementById("aside").innerHTML = s;
}

function sanpham(masp, tensp, gia, mau, hinh, matheloai) {
    this.masp = masp;
    this.tensp = tensp;
    this.gia = gia;
    this.mau = mau;
    this.hinh = hinh;
    this.theloai = matheloai;
}

//khai bao mang san pham
var sp = new Array();
sp[0] = new sanpham("SP001", "Áo Thun Nam Ma Bư Basic", " 150.000", "red", "img/anh1.jpg", "aothun");
sp[1] = new sanpham("SP002", "Áo Thun Nam Ma Bư Basic", "150.000", "blue", "img/anh2.jpg", "aothun");
sp[2] = new sanpham("SP003", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh3.jpg", "aothun");
sp[2] = new sanpham("SP003", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh3.jpg", "aothun");
sp[3] = new sanpham("SP004", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh4.jpg", "aothun");
sp[4] = new sanpham("SP005", "Áo Thun Nam Ma Bư Basic", "150.000", "red", "img/anh5.jpg", "aothun");
sp[5] = new sanpham("SP006", "Áo Thun Nam Ma Bư Basic", "150.000", "blue", "img/anh6.jpg", "aothun");
sp[6] = new sanpham("SP007", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh7.jpg", "aothun");
sp[7] = new sanpham("SP008", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh8.jpg", "aothun");
sp[8] = new sanpham("SP009", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh9.jpg", "aothun");
sp[9] = new sanpham("SP0010", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh10.jpg", "aothun");
sp[10] = new sanpham("SP011", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh11.jpg", "aothun");
sp[11] = new sanpham("SP012", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh12.jpg", "aothun");
sp[12] = new sanpham("SP013", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh13.jpg", "aothun");
sp[13] = new sanpham("SP014", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh14.jpg", "aothun");
sp[14] = new sanpham("SP015", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh15.jpg", "aothun");
sp[15] = new sanpham("SP016", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh16.jpg", "aothun");
sp[16] = new sanpham("SP017", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh17.jpg", "aothun");
sp[17] = new sanpham("SP018", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh18.jpg", "aothun");
sp[18] = new sanpham("SP019", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh19.jpg", "aothun");
sp[19] = new sanpham("SP020", "Áo Thun Nam Ma Bư Basic", "150.000", "yellow", "img/anh20.jpg", "aothun");
sp[20] = new sanpham("SP021", "Áo Khoác Nam Ma Bư Dù", "150.000", "yellow", "img/anh21.jpg", "aokhoac");
sp[21] = new sanpham("SP022", "Áo Khoác Nam Adachi Dù", "150.000", "yellow", "img/anh22.jpg", "aokhoac");
sp[22] = new sanpham("SP023", "Áo Khoác Nam Ma Bư Dù", "150.000", "yellow", "img/anh23.jpg", "aokhoac");
sp[23] = new sanpham("SP024", "Áo Khoác Nam Adachi KaKi", "150.000", "yellow", "img/anh24.jpg", "aokhoac");
sp[24] = new sanpham("SP025", "Áo Khoác Nam Adachi Thun", "150.000", "yellow", "img/anh25.jpg", "aokhoac");
sp[25] = new sanpham("SP026", "Áo Khoác Nam Ma Bư Kaki", "150.000", "yellow", "img/anh26.jpg", "aokhoac");
sp[26] = new sanpham("SP027", "Áo Khoác Nữ Adachi Dù", "150.000", "yellow", "img/anh27.jpg", "aokhoac");
sp[27] = new sanpham("SP028", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh28.jpg", "aokhoac");
sp[28] = new sanpham("SP029", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh29.jpg", "aokhoac");
sp[29] = new sanpham("SP030", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh30.jpg", "aokhoac");
sp[30] = new sanpham("SP031", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh31.jpg", "aokhoac");
sp[31] = new sanpham("SP032", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh32.jpg", "aokhoac");
sp[32] = new sanpham("SP033", "Áo Khoác Nam KiriMaru Thun", "150.000", "yellow", "img/anh33.jpg", "aokhoac");
sp[33] = new sanpham("SP034", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh34.jpg", "aokhoac");
sp[34] = new sanpham("SP035", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh35.jpg", "aokhoac");
sp[35] = new sanpham("SP036", "Áo Khoác Nam No Style Thun", "150.000", "yellow", "img/anh36.jpg", "aokhoac");
sp[36] = new sanpham("SP037", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh37.jpg", "aokhoac");
sp[37] = new sanpham("SP038", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh38.jpg", "aokhoac");
sp[38] = new sanpham("SP039", "Áo Khoác Nam Ma Bư Hoodie", "150.000", "yellow", "img/anh39.jpg", "aokhoac");
sp[39] = new sanpham("SP040", "Áo Khoác Nam Ma Bư Thun", "150.000", "yellow", "img/anh40.jpg", "aokhoac");
sp[40] = new sanpham("SP041", "Áo Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh41.jpg", "aosomi");
sp[41] = new sanpham("SP042", "Áo Sơ Mi Nam No Style ", "150.000", "yellow", "img/anh42.jpg", "aosomi");
sp[42] = new sanpham("SP043", "Áo Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh43.jpg", "aosomi");
sp[43] = new sanpham("SP044", "Áo Sơ Mi Nam No Style ", "150.000", "yellow", "img/anh44.jpg", "aosomi");
sp[44] = new sanpham("SP045", "Áo Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh45.jpg", "aosomi");
sp[45] = new sanpham("SP046", "Áo Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh46.jpg", "aosomi");
sp[46] = new sanpham("SP047", "Áo Sơ Mi Nam Ma Bư ", "150.000", "yellow", "img/anh47.jpg", "aosomi");
sp[47] = new sanpham("SP048", "Áo Sơ Mi Nam No Style", "150.000", "yellow", "img/anh48.jpg", "aosomi");
sp[48] = new sanpham("SP049", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh49.jpg", "aosomi");
sp[49] = new sanpham("SP050", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh50.jpg", "aosomi");
sp[50] = new sanpham("SP051", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh51.jpg", "aosomi");
sp[51] = new sanpham("SP052", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh52.jpg", "aosomi");
sp[52] = new sanpham("SP053", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh53.jpg", "aosomi");
sp[53] = new sanpham("SP054", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh54.jpg", "aosomi");
sp[54] = new sanpham("SP055", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh55.jpg", "aosomi");
sp[55] = new sanpham("SP056", "Áo Sơ Mi Nam Ma Bư Caro ", "150.000", "yellow", "img/anh56.jpg", "aosomi");
sp[56] = new sanpham("SP057", "Áo Sơ Mi Nam No Style", "150.000", "yellow", "img/anh57.jpg", "aosomi");
sp[57] = new sanpham("SP058", "Áo Sơ Mi Nam Ma Bư Caro", "150.000", "yellow", "img/anh58.jpg", "aosomi");
sp[58] = new sanpham("SP059", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh59.jpg", "aosomi");
sp[59] = new sanpham("SP060", "Áo Sơ Mi Nam Ma Bư", "150.000", "yellow", "img/anh60.jpg", "aosomi");
sp[60] = new sanpham("SP061", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh61.jpg", "quandai");
sp[61] = new sanpham("SP062", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh62.jpg", "quandai");
sp[62] = new sanpham("SP063", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh63.jpg", "quandai");
sp[63] = new sanpham("SP064", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh64.jpg", "quandai");
sp[64] = new sanpham("SP065", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh65.jpg", "quandai");
sp[65] = new sanpham("SP066", "Quần Kaki Nam No Style Dài ", "150.000", "yellow", "img/anh66.jpg", "quandai");
sp[66] = new sanpham("SP067", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh67.jpg", "quandai");
sp[67] = new sanpham("SP068", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh68.jpg", "quandai");
sp[68] = new sanpham("SP069", "Quần Jean Nam No Style Dài ", "150.000", "yellow", "img/anh69.jpg", "quandai");
sp[69] = new sanpham("SP070", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh70.jpg", "quandai");
sp[70] = new sanpham("SP071", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh71.jpg", "quandai");
sp[71] = new sanpham("SP072", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh72.jpg", "quandai");
sp[72] = new sanpham("SP073", "Quần Jean Nam No Style Dài", "150.000", "yellow", "img/anh73.jpg", "quandai");
sp[73] = new sanpham("SP074", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh74.jpg", "quandai");
sp[74] = new sanpham("SP075", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh75.jpg", "quandai");
sp[75] = new sanpham("SP076", "Quần Jean Nam Ma Bư Dài", "150.000", "yellow", "img/anh76.jpg", "quandai");
sp[76] = new sanpham("SP077", "Quần tây Nam No Style Dài", "150.000", "yellow", "img/anh77.jpg", "quandai");
sp[77] = new sanpham("SP078", "Quần tây Nam No Style Dài", "150.000", "yellow", "img/anh78.jpg", "quandai");
sp[78] = new sanpham("SP079", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh79.jpg", "quandai");
sp[79] = new sanpham("SP080", "Quần Tây Nam No Style Dài", "150.000", "yellow", "img/anh80.jpg", "quandai");
sp[80] = new sanpham("SP081", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh81.jpg", "quanshort");
sp[81] = new sanpham("SP082", "Quần Thun Nam No Style", "150.000", "yellow", "img/anh82.jpg", "quanshort");
sp[82] = new sanpham("SP083", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh83.jpg", "quanshort");
sp[83] = new sanpham("SP084", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh84.jpg", "quanshort");
sp[84] = new sanpham("SP085", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh85.jpg", "quanshort");
sp[85] = new sanpham("SP086", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh86.jpg", "quanshort");
sp[86] = new sanpham("SP087", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh87.jpg", "quanshort");
sp[87] = new sanpham("SP088", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh88.jpg", "quanshort");
sp[88] = new sanpham("SP089", "Quần Kaki Nam Ma Bư ", "150.000", "yellow", "img/anh89.jpg", "quanshort");
sp[89] = new sanpham("SP090", "Quần Sooc Nam Ma Bư", "150.000", "yellow", "img/anh90.jpg", "quanshort");
sp[90] = new sanpham("SP091", "Quần Kaki Nam No Style", "150.000", "yellow", "img/anh91.jpg", "quanshort");
sp[91] = new sanpham("SP092", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh92.jpg", "quanshort");
sp[92] = new sanpham("SP093", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh93.jpg", "quanshort");
sp[93] = new sanpham("SP094", "Quần Jean Nam Adachi ", "150.000", "yellow", "img/anh94.jpg", "quanshort");
sp[94] = new sanpham("SP095", "Quần Kaki Nam Ma Bư", "150.000", "yellow", "img/anh95.jpg", "quanshort");
sp[95] = new sanpham("SP096", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh96.jpg", "quanshort");
sp[96] = new sanpham("SP097", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh97.jpg", "quanshort");
sp[97] = new sanpham("SP098", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh98.jpg", "quanshort");
sp[98] = new sanpham("SP099", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh99.jpg", "quanshort");
sp[99] = new sanpham("SP0100", "Quần Jean Nam Ma Bư", "150.000", "yellow", "img/anh100.jpg", "quanshort");



var chuoi = "";
for (i = 0; i < sp.length; i++) {
    chuoi = chuoi + "MaSP:" + sp[i].masp + " TenSP:" + sp[i].tensp + " Gia:" + sp[i].gia + " Mau:" + sp[i].mau + "</br>";
    //chuoi = chuoi + sp[i].masp;
}
//lay url cac muc menu
function layurl() { // ????? 2 ham tach url, vcl ham do cua thang menu

    var url = window.location.href;
    var params = url.split('?');
    //alert(params[0]);
    //alert(params[1]);
    var chuoicon = params[1];//aokhoac&0
    var s = "";
    var dem = 0;
    var lienket = "";
    var loaisp = "";
    if ((params.length > 1)&&(chuoicon!=" ")) {
        chuoicon = chuoicon.split('&');
        //alert("chuoi con");
        //alert(chuoicon[1]);
        var vitri = chuoicon[1];//0
        var loaisp = chuoicon[0];//aokhoac
    }

    // alert(url);
    var sotrang;
    var temp = [];
    var k = 0;
    for (var i = 0; i < sp.length; i++)
        if (sp[i].theloai.indexOf(loaisp) != -1) { /*  nếu loaisp = " " sp[i].theloai.indexOf(loaisp)=0  */
            temp[k++] = sp[i];
        }

    for (var i = vitri; i < temp.length; i++) {
        dem++;
        //mỗi div chứa 1 hình
        s = s + '<a href="chitietsanpham.html?' + temp[i].masp + '"><div style="float:left; font-size:18px">' +
            '<img src="' + temp[i].hinh + '"/>' + temp[i].tensp + '<br><p style="color:red;font-weight:500">' + temp[i].gia + 'đ</p></div></a>';
        if (dem == 8)
            break;
    }
    var vt;
    document.getElementById("noidungcontent").innerHTML = s;
    sotrang = Math.ceil(temp.length / 8);
    for (i = 1; i <= sotrang; i++) {
        vt = (i - 1) * 8;
        var color = (vitri==vt?"red":"black");//neu dang o trang hien tai so trang se hien thi mau do
        lienket = lienket + '<a href="index.html?' + loaisp + '&' + vt + '"><div align="center" style="float:left;width:25px;height:25px;color:'+color+'">' + i + '</div></a>';
    }
    document.getElementById("sotrang").innerHTML = lienket;
    //}
}
function addSp(){
                var url=window.location.href;
                var chuoicon=url.split("?");
                var s="";
                if(chuoicon[1] == undefined)
                {   
                    for(var i=0;i<8;i++)
                     s= s+'<a href="chitietsanpham.html?'+sp[i].masp+'"><div style="float:left; font-size:20px">'+
                                  '<img src="'+sp[i].hinh+'"/><br>'+sp[i].tensp+'<br>'+'<p style="color:red;;font-weight:500">'+sp[i].gia+'đ</p></div></a>';
                document.getElementById("noidungcontent").innerHTML=s;
                }   
                

}
function mucsp(){

    var url=window.location.href;
                var chuoicon=url.split("?");
                var s="";
                if(chuoicon[1] == undefined)
                {   
                    s='<div style="color:#777; font-size:30px">TOP sản phẩm "HOT"</div>';
                } 
                else
                 s='<div style="color:#777; font-size:30px">Thông tin sản phẩm</div>'  ;
             document.getElementById("Muc").innerHTML=s;
}
function TimKiem() {
    if (window.location.href.indexOf("search") != -1) { //?search=thun&gia=10000
        var url = window.location.href;
        console.log(url);
        var vitri_tren_url="";
        var sanphamTrenHref = '';

        var u = url.split('?')[1]; // mang1 search=aothun
        u = u.split('='); // search || aothun
        if(u[0]== "search")
        {
            var sanphamTrenHref=u[1];//ao+thun
        }   
        sanphamTrenHref=(sanphamTrenHref).toLowerCase();
        var lienket = '';
        var s = "";
        var dem = 0;
        var sotrang;
        var loaisp = u[1];
        var temp = [];
        var k = 0;
        if (!vitri_tren_url) {
            vitri_tren_url = 0;
        }
        console.log('sp '+sanphamTrenHref);
        for (var i = sp.length - 1; i >= 0; i--) {

            //toLowerCase() chuyển chữ in thành chữ thường
            //console.log(change_char(change_alias(sp[i].tensp)).toLowerCase());
             if (change_char(change_alias(sp[i].tensp)).toLowerCase().indexOf(sanphamTrenHref) != -1) {

                 temp[k++] = sp[i];
             }
        }
        console.log(temp);
        for (var i =0; i < temp.length; i++) {
            dem++;

            s += '<a href="chitietsanpham.html?' + temp[i].masp + '"><div align="center" style="float:left;font-size:20px">' +
                '<img src="' + temp[i].hinh + '"/>' + temp[i].tensp + '<br><p style="color:red;font-weight:500">' + temp[i].gia + 'đ</p></div></a>';

            // kho nhin vc
            if (dem == 8) break;

        }
        document.getElementById("noidungcontent").innerHTML += s;
        sotrang = Math.ceil(temp.length / 8);

        for (var x = 1; x <= sotrang; x++) {
            vitri = (x - 1) * 8;
            lienket = lienket + '<a href="index.html?' + loaisp + '&' + vitri + '"><div align="center" style="float:left;width:25px;height:25px;background-color:white">' + x + '</div></a>';
        }
        document.getElementById("sotrang").innerHTML = lienket;

    }
}
function change(){
    var loaisp=document.getElementById("search_id").value;
    window.location.href='index.html?search='+change_char(change_alias(loaisp));

}
function change_alias(str) {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
}
//chuyển đổi dấu cách thành đấu cộng
function change_char(str) {
    str = str.replace(/ /g,"+");
    return str;
}
function change_kitu(str)
{
    str = str.replace(/[^0-9a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ\s]/gi, '');
    return str;
}
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
        d = d + '<a href="index.html?"><ul><li type="circle">' + danhmucfooter1[i].name + '</ul></li></a>';
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
//javascript của chi tiết sản phẩm 
// function HienThiSanPham() {
//     var url = window.location.href;
//     var params = url.split("?");
//     var chuoicon0 = params[0]; //chitietsanpham.html
//     var chuoicon1 = params[1]; //SP...
//     var s = "";
//     for (i = 0; i < sp.length; i++) {
//         if (sp[i].masp == chuoicon1) {
//             s = '<div><img src="' + sp[i].hinh + '"/></div>'

//         }
//     }
//     document.getElementById("chitietsp").innerHTML = s;
// }
// function csbaohanh(){
//     var s="";
//     var baohanh="baohanhsanpham";
//     var csgiaonhan="chinhsachgiaonhan";
//     var csdoihang="chinhsachdoitra"
//     var url=window.location.href;
//     var chuoicon=url.split("?");
//     if(chuoicon[1].indexOf(baohanh) != -1)
//       { s=s+`<div><img src="img/logobaohanh.jpg" style="width:669px;height:164px"/></div><div style="text-align:left"><p style="font-size:40px"> Chính Sách Bảo Hành của Shop Thời trang cao cấp CHANEL</p><br>

 

// <p style="font-size:30px">(Bảo hành sản phẩm là khắc phục sự cố hư hỏng, sự cố kỹ thuật xảy ra do lỗi của nhà sản xuất.)</p><br>

// <p style="color:red;font-size:30px">1. Thời gian bảo hành.</p><br>
// <p style="font-size:18px">1 tháng kể từ ngày nhận hàng.</p><br>

// <p style="color:red;font-size:30px">2. Điều kiện bảo hành.</p><br>
// <p style="font-size:18px">Các sản phẩm bảo hành phải còn mới, không bị dơ bẩn.<br>
// Sản phẩm bị thủng, rách… do lỗi của nhà sản xuất.<br>
// Sản phẩm bị in màu lem, bay màu, in sai quy cách.</p><br>
// <p style="color:red;font-size:30px">3. Những trường hợp không được bảo hành.</p><br>
// <p style="font-size:18px"Sử dụng sản phẩm sai với hướng dẫn sử dụng.<br>
// Sản phẩm bị hư do thiên tai, lũ lụt, hỏa hoạn....<br>
// Sản phẩm đã qua sử dụng bị dơ bẩn, đã được sữa chữa bởi người sử dụng.<br>
// Sản phẩm hư hỏng do tác động bên ngoài, biến dạng, rách thủng, ẩm mốc, cháy hoặc do con người sử dụng làm hỏng.</p><br>
// <p style="color:red;font-size:30px">4. Hình thức bảo hành.</p><br>
// <p style="font-size:18px"Thu hồi và sản xuất mới những sản phẩm không đạt yêu cầu.<br>
// Sửa lại những sản phẩm bị lỗi nhỏ.</p><br>
// <p style="color:red;font-size:30px">5. Địa điểm nhận bảo hành.</p><br>
// <p style="font-size:20px">Shop thời trang CHANEL<br><br>

// Địa chỉ: 273 An Dương Vương, P.2, Quận 5, TP HCM<br>

// Điện thoại: 0375298096 *** 0916153169<br>

// Email: thoitrangchanel@gmail.com</p></div>`  
// document.getElementById("baohanh").innerHTML=s;
// } 
//     else if(chuoicon[1].indexOf(csgiaonhan) != -1)
//     {
//         s=s+`<div><img src="img/vanchuyenhang.jpg"/></div><div style="text-align:left"><p style="font-size:40px">Chính Sách Vận Chuyển - Giao Nhận</p><br>

// <p style="font-size:30px">Shop Thời Trang cao cấp Chanel</p><br>

// <p style="font-size:30px">Tel : (08) 98.40.9899 --- 0934.020.899<br>
// Giờ làm việc: Sáng: 8h – 12h, Chiều: 13h30 – 5h30<br>

// Ngày làm việc từ thứ 2 đến thứ 7.</p>

// <p style="font-size:30px;color:red;">1. Thời gian giao hàng.<br>
//     Shop áp dụng chính sách giao hàng như sau:</p><br>

// <p style="font-size:20px">Khu vực giao hàng:<br> 
//     Nội thành:                                   1 – 2 ngày( trừ chủ nhật)<br>
//     Ngoại thành:                                2 – 3 ngày (trừ chủ nhật)<br>
// </p>
// <p  style="font-size:30px;color:red;">2. Phí giao hàng</p>
// <p  style="font-size:20px">Đối với KH trong thành phố,Shop sẽ giao hàng miễn phí với đơn hàng trị giá trên 2.000.000 VNĐ.<br>

// Đối với đơn hàng dưới 2.000.000 VNĐ, Shop sẽ tính phí giao hàng là 50.000 VNĐ/ lần giao hàng.<br>

// Đối với khách hàng ở các tỉnh, Công ty sẽ hỗ trợ mang hàng ra bến xe, chuyển theo địa chỉ khách hàng yêu cầu. Nhưng phí gửi hàng với nhà xe, khách hàng thanh toán với nhà xe.</p></div>`
//     document.getElementById("baohanh").innerHTML=s;}
//     else if(chuoicon[1].indexOf(csdoihang)!=-1)
//         { s=s+`<div style="text-align:left;font-size:20px"><p style="font-size:40px"><h1>Chính sách đổi hàng</h1></p><br>
// <p style="font-size:20px"><h1>Loại sản phẩm áp dụng:</h1> Sản phẩm nguyên giá.</p><br>

// <p style="font-size:20px"><h1>Thời gian đổi sản phẩm:</h1><br>

// - Sản phẩm mua tại hệ thống Showroom: Trong vòng 15 ngày kể từ ngày mua.<br>

// - Sản phẩm mua Online: Trong vòng 30 ngày kể từ ngày mua.<br>

// - Ngày mua: Là ngày ghi trên hóa đơn bán hàng.<br>
// <h1>Điều kiện ĐỔI sản phẩm:</h1>

// - Sản phẩm chưa sử dụng còn nguyên tem mác, hóa đơn và còn mới 100%<br>

// - Sản phẩm thỏa mãn điều kiện của Thời hạn đổi sản phẩm.<br>

// - Sản phẩm đã qua sử dụng nhưng bị lỗi kỹ thuật do sản xuất.<br>

// - Sản phẩm không bị làm dơ, bẩn, hư hỏng bởi những tác nhân bên ngoài sau khi mua sản phẩm.<br>

// - Hàng hóa được xác định nguồn gốc mua tại Hệ thống showroom Aristino và kênh bán hàng online của Aristino<br>

// <h1>Sản phẩm KHÔNG nhận đổi:</h1>

// - Sản phẩm đã sử dụng. Sản phẩm có mùi nước hoa, hóa mỹ phẩm.<br>

// - Sản phẩm quá thời hạn đổi.<br>

// - Sản phẩm không còn nhãn mác, tem bảo hành, sử dụng sai quy cách, bảo quản va chạm, ma sát với vật cứng làm trầy xước, hư hỏng<br>

// - Không có hóa đơn mua hàng<br>

// - Các phụ kiện của sản phẩm không còn đầy đủ<br>

// - Sản phẩm quần áo lót, bít tất.<br>

// - Sản phẩm thuộc nhóm hàng giảm giá, khuyến mại, trong chương trình giảm giá hàng tháng, thanh lý hàng tồn kho, hàng lủng size.<br>

// - Quý khách muốn thay đổi chủng loại, mẫu mã nhưng không thông báo trước trong thời gian quy định đổi hàng<br>

// <h1>Giá trị đổi hàng:</h1>

// - Sản phẩm đổi mới sẽ có giá trị ngang bằng hoặc lớn hơn giá trị sản phẩm đã mua trước đó.<br>

// - Trường hợp sản phẩm mới có giá trị cao hơn khách hàng phải trả thêm phần tiền phát sinh thêm.<br>

// Địa điểm áp dụng đổi sản phẩm: Sản phẩm chỉ được phép đổi khi Quý khách mua tại hệ thống các showroom của ARISTINO trên toàn quốc hoặc mua online qua website.<br>

// <h1>Quy trình xử lý thủ tục đổi hàng:</h1>

// - Khách hàng liên hệ trực tiếp và mang sản phẩm tới hệ thống Showroom Aristino nơi quý khách mua hàng, hoặc showroom gần nhất, hoặc phòng CSKH của Aristino.<br>

// - Aristino sẽ kiểm tra tình trạng sản phẩm và tiến hành đổi hàng với những trường hợp sản phẩm đáp ứng tiêu chí của điều kiện đổi hàng trong chính sách đã cam kết.<br>

// - Sau khi tiến hành kiểm tra xác minh, nhân viên CSKH của Aristino sẽ liên hệ bằng điện thoại hoặc email để xác nhận thông tin đổi hàng/ hoặc bảo hành...<br>

// - Quy trình xử lý thủ tục đổi hàng được thực hiện trong vòng 2 - 5 ngày tính từ lúc Aristino nhận đủ thông tin và các giấy tờ theo quy định từ phía khách hàng.<br>

// <h1>Quy định về tính phí vận chuyển:</h1>

// - Khách hàng chuyển sản phẩm đến Showroom hoặc phòng CSKH : Phí vận chuyển khách hàng chịu<br>

// - Sản phẩm bảo hành xong, công ty chuyển trả sản phẩm cho khách hàng: Công ty chịu phí vận chuyển (nếu có phát sinh)<br>

// - Đổi hàng do phát sinh từ phía khách hàng (chọn sai sản phẩm, màu sắc, kích cỡ…): Khách hàng chịu phí vận chuyển 2 chiều.<br>

// - Sản phẩm lỗi kỹ thuật: Công ty chịu phí vận chuyển 2 chiều.</p></div>`
// document.getElementById("baohanh").innerHTML=s;
// }

// }
     // luu lai
function layTenDangNhap(){
    var tenDangNhap=getUser();
    if(tenDangNhap.username!=undefined)
    // alert(tenDangNhap);
    {console.log(tenDangNhap.username);
    var s="";
    s=tenDangNhap.username;
    document.getElementById("tendangnhap").innerHTML=s+`<div><a href="#" onclick="dangXuat();">Đăng xuất</a></div>`;
}
    else return false;
}
