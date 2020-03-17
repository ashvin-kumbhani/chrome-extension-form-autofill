chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
	console.log("13 message", message)
	setTimeout(function () {
		// document.getElementsByName("paymentType")[0].click()
		// document.getElementsByName("vehicleMake")[0].value
		// document.getElementsByName("vehicleYear")[0].value
		// document.getElementsByName("bodyStyle")[0].value
	}, 500)
}
