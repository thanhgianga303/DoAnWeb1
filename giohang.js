function xoaSanPham(vitri){
	 var l=JSON.parse(localStorage.getItem("listSanPham"));
	 // gia=JSON.parse(localStorage.getItem("listGia"));
	for(var i=0;i<l.length;i++)
		if(i==vitri) {
			l.splice(vitri,1);
		}
	localStorage.setItem("listSanPham", JSON.stringify(l));
    // localStorage.setItem("listGia", JSON.stringify(gia));
}