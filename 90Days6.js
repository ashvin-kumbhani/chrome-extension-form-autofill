chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage (message, sender, sendResponse) {
	console.log("message", message)
	console.log("sender", sender)
	if (message.payload){
		setTimeout(function(){
			document.getElementsByName("vin")[0].value = message.payload.vin
		}, 2000)

		setTimeout(function(){
			document.getElementsByName("tribeMember")[1].click()
		}, 3000)

		setTimeout(function(){
			document.getElementsByName("submit.next")[0].click()
		}, 6000)
	}
}
