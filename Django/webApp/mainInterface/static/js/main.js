function queryLoading() {
	let inProgress = true;
	if(inProgress){
		inProgress = false;
		document.getElementById("progress").className = document.getElementById("progress").className + " progress-bar-animated";
	}
}

$('#sqlDialog').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

$('#NoSQLDialog').on('shown.bs.modal', function () {
  $('#myInput').focus()
})