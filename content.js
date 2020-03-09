console.log("content file")

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
	// recieved msg from background.js
	console.log("message", message)
	console.log("sender", sender)
	console.log("sendResponse", sendResponse)

	// let payload = {
	// 	txt: "from content.js"
	// }

	// chrome.tabs.sendMessage(tab.id, payload)

	// Fill email
	setTimeout(function() {
		document.getElementsByName('username')[0].value = 'james@usedvwaudi.com'
	}, 2000)

	// Fill password
	setTimeout(function(){
		document.getElementsByName('password')[0].value = 'james110'
	}, 4000)

	// Click the login button
	setTimeout(function(){
		document.getElementsByClassName('button100First')[0].click()
	}, 5000)
}
