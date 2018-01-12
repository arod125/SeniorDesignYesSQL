let navOpen = false;
function profileNav() {
	if(navOpen){
		document.getElementById("profileNav").style.width = "0px";
		document.getElementById("content").style.marginLeft = "0";
		navOpen = false;
	} else {
		document.getElementById("profileNav").style.width = "500px";
		document.getElementById("content").style.marginLeft = "500px";
		navOpen = true;
	}
}