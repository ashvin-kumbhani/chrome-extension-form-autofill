console.log("content file")

chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(message, sender, sendResponse) {
	console.log("message", message)
	console.log("sender", sender)
	console.log("sendResponse", sendResponse)
}
