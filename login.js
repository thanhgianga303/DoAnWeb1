//code của Giang
//Kiểm tra đăng nhập
function kiemTraUser(){
var tenDangNhap=document.getElementById("AC").value;// lấy giá trị khi nhập tên đăng nhập
var matKhau=document.getElementById("PAS").value;//lấy giá trị khi nhập mật khẩu
var taiKhoanDaCo=getListUser();
var s="";
//JSON.parse(localStorage.getItem("listUser"));
var newUser= new User(tenDangNhap,matKhau);
for(var u of taiKhoanDaCo)
	if((u.username==newUser.username)&&(u.pass==newUser.pass))
	{
	s=newUser.username;
	alert("Đăng nhập thành công!");
	setUser(newUser);
	document.getElementById("tendangnhap").innerHTML=s;
	window.location.reload();
	return false;
	}
 alert("Sai tài khoản hoặc mật khẩu!");
}
function dangXuat(){
	window.localStorage.removeItem("User");
	alert("Đăng xuất thành công");

	window.location.reload();
}