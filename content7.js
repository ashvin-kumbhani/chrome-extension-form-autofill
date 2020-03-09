
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(msg, response, sender) {
	console.log("content script run 6...........222222", msg)
	if (msg.payload) {
		// if (msg.payload.from === "dob") {
		console.log(msg)
		let liscenceNo = msg.payload.liscence.split(' ')[0]
		let dobArr = msg.payload.dob.split('/')
		let date = dobArr[0]
		let month = dobArr[1]
		let yearArr = dobArr[2].split(' ')
		let year = yearArr[0]
		document.getElementsByName("driverLicense1")[0].value = liscenceNo
		document.getElementsByName("monthOfBirth1")[0].value = date
		document.getElementsByName("dayOfBirth1")[0].value = month
		document.getElementsByName("yearOfBirth1")[0].value = year
		document.getElementsByName("continue")[0].click()
	}
}
