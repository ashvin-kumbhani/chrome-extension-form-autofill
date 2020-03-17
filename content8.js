chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
	console.log('message', message)
	setTimeout(function(){
		document.getElementsByName("vehicleMake")[0].value = message.payload.make
	}, 500)

	setTimeout(function(){
		document.getElementsByName("vehicleYear")[0].value = message.payload.year
	}, 1000)

	setTimeout(function(){
		document.getElementsByName("bodyStyle")[0].value = message.payload.style
	}, 1500)

	setTimeout(function(){
		document.getElementsByClassName("button180First")[0].click()
	}, 2000)
}
