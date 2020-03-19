chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage(message, sender, sendResponse) {
	console.log("message==>",message)
	if (message.payload) {
		console.log("message22222222==>",message)
		var msg = message

		// setTimeout(function() {
		// 	document.getElementsByName("vehicleMake")[0].value = msg.payload.make
		// }, 2000)

		// setTimeout(function() {
		// 	document.getElementsByName("vehicleYear")[0].value = msg.payload.year
		// }, 4000)

		setTimeout(function() {
			document.getElementsByName("bodyStyle")[0].value = msg.payload.style
		}, 2000)

		setTimeout(function() {
			document.getElementsByName("submit.next")[0].click()
		}, 3000)
	}
}

