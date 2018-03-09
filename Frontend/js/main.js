function queryLoading() {
	let inProgress = true;
	if(inProgress){
		inProgress = false;
		document.getElementById("progress").className = document.getElementById("progress").className + " progress-bar-animated";
	}
}

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})