function Dieukien() {
    var x = document.forms["Main"]["Acc"].value;
    if (x == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Acc.focus();
        return false;
    }
	var y = document.forms["Main"]["Pass"].value;
    if (y == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Pass.focus();
        return false;
    }
	var z = document.forms["Main"]["Repass"].value;
    if (z == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Repass.focus();
        return false;
    }
	var a = document.forms["Main"]["Answer"].value;
    if (a == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Answer.focus();
        return false;
    }
	var b = document.forms["Main"]["LastName"].value;
    if (b == "") {
        alert("Thông tin không được bỏ trống!");
		Main.LastName.focus();
        return false;
    }
	var c = document.forms["Main"]["Firstname"].value;
    if (c == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Firstname.focus();
        return false;
    }
	var d = document.forms["Main"]["Day"].value;
    if (d == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Day.focus();
        return false;
    }
	var e = document.forms["Main"]["Year"].value;
    if (e == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Year.focus();
        return false;
	}
	var f = document.forms["Main"]["Phone"].value;
    if (f == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Phone.focus();
        return false;
	}
	var g = document.forms["Main"]["Email"].value;
    if (g == "") {
        alert("Thông tin không được bỏ trống!");
		Main.Email.focus();
        return false;
	}
    if (y==z) ;
	else 
	{
        alert("Mật khẩu không trùng !");
		Main.Repass.focus();
        return false;
	}
}
function phatsinhcheckbox_noidia()
{
	var s='<br /><input type="checkbox" name="FE"  />FE Credit<input type="checkbox" name="Aribank"  />Aribank<input type="checkbox" name="BIDV"  />BIDV<input type="checkbox" name"Khac"/>Khác';
	return s;
	
}
function phatsinhcheckbox_quocte()
{
	var s='<br /><input type="checkbox" name="MasterCard"  />MasterCard<input type="checkbox" name="Visa"  />Visa<input type="checkbox" name="JCB"  />JCB';
	return s;
	
}
function Checkbox(Phuongthuc)
{
	var aPhuongthuc=Phuongthuc.value;
	var a;
	switch (aPhuongthuc)
	{
		case 'noi_dia':a=phatsinhcheckbox_noidia();break;
		case 'quoc_te':a=phatsinhcheckbox_quocte();break;
		default:a='';break;
	}
	document.getElementById("PT").innerHTML=a;
}
function RESIGN(){
var s="";
s='<form name="Main" action="#" onsubmit="return Dieukien()"method="post"><div style="border:#000 solid 2px; width:800px; margin-left:10%"><div align="center"  style="height:25px; background-color:#09C"><b>ĐĂNG KÝ</b></div><div  style="height:25px">	<div style="float:left;width:40%; text-align:right">Tên đăng nhập:</div>    <div style="float:right; width:60%"><input type="text" name="Acc" id="username" placeholder="Tên đăng nhập"/></div></div><div style="height:25px">	<div style="float:left;width:40%; text-align:right">Mật khẩu:</div>    <div style="float:right; width:60%"><input name="Pass" type="password" placeholder="Nhập mật khẩu"/></div></div><div align="center">(Tối thiểu 5 ký tự)</div><div  style="height:25px">	<div style="float:left;width:40%; text-align:right">Gõ lại mật khẩu:</div>    <div style="float:right; width:60%">      <input type="password" name="Repass" placeholder="Re Password" placeholer="Nhập lại mật khẩu"/>    </div></div><div style="margin-top:2px">	<hr></hr>    <div>    Câu hỏi bảo mật:    </div></div><div  style="height:25px">	<div style="float:left; width:40%; text-align:right">Câu hỏi bí mật:</div>    <div style="float:right; width:60%; text-align:left">    <select name="Secret" >      	<optgroup label="Câu hỏi về thú cưng">       	<option value="First">Thú nuôi đầu tiên của bạn ?</option>        	<option value="Now">Thú nuôi hiện giờ ?</option>        	<option value="Favour">Thú nuôi bạn thích nhất ?</option>        </optgroup>      		<optgroup label="Câu hỏi về món ăn">        	<option value="Favour">Món ăn bạn thích nhất ?</option>        	<option value="Hate">Món ăn bạn ghét nhất ?</option>        </optgroup>   		</select>      </div></div><div style="height:25px">	<div style="float:left;width:40%; text-align:right">Trả lời</div>    <div style="float:right; width:60%">      <input type="text" name="Answer" id="answer" placeholder="Nhập câu trả lời"/>    </div></div><div style="margin-top:2px">	<hr></hr></div><div>Thông tin cá nhân:</div><div  style="height:25px">	<div style="float:left;width:40%; text-align:right">Họ tên và chữ lót</div>    <div style="float:right; width:60%"><input type="text" name="LastName" id="fullname" placeholder="Nhập họ và chữ lót"/></div></div><div  style="height:25px">	<div style="float:left;width:40%; text-align:right">Tên:</div>    <div style="float:right; width:60%"><input type="text" name="Firstname" id="name" placeholder="Nhập tên"/></div></div><div style="height:25px">	<div style="float:left;width:40%; text-align:right">Ngày sinh:</div>    <div style="float:right; width:60%"><select name="Birth" style="width:7%">        <optgroup label="Tháng">        	<option value="1">1</option>        	<option value="2">2</option>        	<option value="3">3</option>        	<option value="4">4</option>        	<option value="5">5</option>        	<option value="6">6</option>        	<option value="7">7</option>        	<option value="8">8</option>        	<option value="9">9</option>        	<option value="10">10</option>        	<option value="11">11</option>        	<option value="12">12</option>        </optgroup>       	</select>        ,        <input name="Day" type="text" size="4%" maxlength="2%" placeholder="Ngày"/>        ,<input name="Year" type="text" size="4%" maxlength="4%" placeholder="Năm"/>         (Tháng,Ngày,Năm)            </div>    </div><div  style="height:25px">	<div style="float:left;width:40%; text-align:right">Giới tính:</div>    <div style="float:right; width:60%">    <input type="radio" name="Gender" value="Nam" />Nam    <input type="radio" name="Gender" value="Nữ" />Nữ    </div></div><div  style="height:25px">	<div style="float:left; width:40%; text-align:right">Bạn là </div>    <div style="float:right; width:60%; text-align:left">      <select name="Carrer">        <optgroup label="Nghề nghiệp liên quan:">          <option value="1">Học sinh</option>         <option value="2">Sinh viên</option>          <option value="3">Công nhân</option>          <option value="4">Nhân viên văn phòng</option>          </optgroup>      </select>    </div>    <div style="height:25px"></div>    <div style="float:left; width:40%; text-align:right">Số điện thoại</div>    <div style="float:right; width:60%; text-align:left">    <input type="text" name="Phone" placeholder="Nhập số điện thoại" />    </div>    <div style="height:25px"></div>    <div style="float:left; width:40%; text-align:right">Email</div>    <div style="float:right; width:60%; text-align:left">    <input type="text" name="Email" placeholder="Nhập Email" />    </div></div><div style="margin-top:50px">  <hr /></hr></div><div style="height:25px">Phương thức thanh toán  <select name="Phuongthuc" onchange="Checkbox(this)">    <option value=" ">Chọn phương thức thanh toán</option>    <option value="noi_dia">Thẻ nội địa</option>    <option value="quoc_te">Thẻ quốc tế</option>  </select></div><div id="PT"></div><div style="margin-top:2px">	<hr></hr></div><div style="height:25px"><div style="float:left;width:40%; text-align:right"><input type="submit" name="Send" value="Đăng ký" /></div>    <div style="float:right; width:60%">    <input type="reset" name="Del" value="Xóa" />    </div></div></div></form>';
document.getElementById("Acc").innerHTML=s;
}
function LOGIN(){
var s1=""; 
s1='<div class="container"><img src="Login.svg" /><form name="LOGIN" method="post" action="#" onsubmit="return REQUIRED()"  ><div class="form-input"><input type="text" name="Account" placeholder="User name" id="AC"/></div><div class="form-input"><input type="password" name="Password" placeholder="Password" id="PAS"/></div><input type="checkbox" name="Term" id="TERM"/>I accepted the term of privacy<br /><input type="submit" name="Send" value="LOGIN" class="sub"/></form><input type="button" value="ĐĂNG KÝ TẠI ĐÂY" class="R"/></div>';
document.getElementById("LOG").innerHTML=s1;
}
function REQUIRED() {
    var I = document.getElementById("AC").value;
    if (I == "") {
        alert("Thông tin không được bỏ trống!");
		AC.focus();
        return false;
    }
	var II = document.getElementById("PAS").value;
    if (II == "") {
        alert("Thông tin không được bỏ trống!");
		PAS.focus();
        return false;
		}
	var III=document.getElementById("TERM").checked;
	if(III==false){
		alert("You must accept the term of privacy");
		return false;
	}
}
var c=new Array("CC","CF","FF","FC");
x=0;
function bg_eff(){
	col_val="#3"+c[x];
	document.bgColor=col_val;
	x++;
	if(x==10)
	{x=0;}
}
function BG_Change()
{
	change_bg=setInterval("bg_eff()",3000);
}
function changeStatic(objRadio)
{
	var RESIGN=document.getElementById("RE");
	var LOGIN=document.getElementById("LO");
	switch(objRadio.value)
	{
		case 'RESIGN':
		RESIGN.disabled=false;
		LOGIN.disabled=true;
		break;
		case 'LOGIN':
		RESIGN.disabled=true;
		LOGIN.disabled=false;
		break;
		default:break;
	}
}
function Local(){
		localStorage.Account=document.getElementById("AC").value;
		alert(innerHTML=localStorage.Account);
	}
function User(username,pass,ho,ten,email,phuongthuc){
	this.username=username;
	this.pass=pass;
	this.ho=ho || "";
	this.ten=ten ||"";
	this.email=email || "";
	// this.products=products||"";
	this.phuongthuc=phuongthuc || "";

}
function getListUser(){
	var data=JSON.parse(window.localStorage.getItem("ListUser")) || [];
	var l = [];
	for(var d of data){
		l.push(d);
	}
	return l;
}
function getUser(){
	return JSON.parse(window.localStorage.getItem("User"))||[];
}
function setUser(u){
	window.localStorage.setItem("User", JSON.stringify(u));
}
function luuThongTin(form){
	var tenDangNhap=form.username.value;
	var matKhau=form.password.value;
	var ho=form.fullname.value;
	var ten=form.firstname.value;
	var email=form.email.value;
	var phuongThuc=form.pttt.value;
	//alert được hết ^^
	var newUser = new User(tenDangNhap,matKhau,ho,ten,email,phuongThuc); //khai báo 1 đối tượng User có tên biến là newUser
	var listUser=getListUser();//khoi tao mang user
	for(var u of listUser){ //duyet tung phan tu cua mang
		if(newUser.username==u.username) {
			alert("Tên đăng nhập đã có người sử dụng");
			return false;
		}
	}
	listUser.push(newUser); //dua newUser vao mảng listUser
	window.localStorage.setItem("ListUser", JSON.stringify(listUser));
	//---->chạy đéo được =))))))))))))))
	alert("Đăng kí thành công");
}


























