let navOpen = false;
function profileNav() {
	if(navOpen){
		document.getElementById("profileNav").style.width = "0%";
		document.getElementById("content").style.marginLeft = "0%";
		navOpen = false;
	} else {
		document.getElementById("profileNav").style.width = "80%";
		document.getElementById("content").style.marginLeft = "80%";
		navOpen = true;
	}
}