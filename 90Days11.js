setTimeout(function(){
	if (!document.getElementsByName("certFlag")[0].checked) {
		document.getElementsByName("certFlag")[0].click()
	}
}, 500)

setTimeout(function() {
	document.getElementsByName("submit.next")[0].click()
}, 1000)
