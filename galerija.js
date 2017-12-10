function start(){
	var galerija = document.getElementById("galerija");
	var brSlika = 6;
	var img;
	for(var i = 0; i<brSlika; i++){
		img = document.createElement("IMG");
		img.setAttribute("src","img/img"+i+".jpg");
		img.setAttribute("onclick","bgFunction("+i+")");
		galerija.appendChild(img);
	}
}
function bgFunction(broj){
	document.body.style.backgroundImage = "url('img/img"+broj+".jpg')";
}