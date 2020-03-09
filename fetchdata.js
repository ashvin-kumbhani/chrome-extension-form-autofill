console.log("fetch here......called")

if (document.getElementById("idofcolor") === null) {
	document.getElementsByClassName("vehicle-button")[3].click()
}

var color = null
var Vin = null
var Liscence = null
var Dob = null
setTimeout(function() {
	var color = document.getElementById("idofcolor").innerText
	var Vin = document.getElementsByClassName("vehicle-details-vin")[0].innerText
	var Liscence = document.getElementsByName("BuyerDl")[0].value
	var Dob = document.getElementsByName("BuyerDob")[0].value

	console.log("color", color)
	console.log("Vin", Vin)
	console.log("Liscence", Liscence)
	console.log("Dob", Dob)
	let payload = {
		from: "fetchdata",
		color: color,
		vin: Vin,
		liscence: Liscence,
		dob: Dob
	}
	var port = chrome.runtime.connect({name: "knockknock"});
	port.postMessage({payload: payload});
	// port.onMessage.addListener(function(msg) {
	//   if (msg.question == "Who's there?")
	//     port.postMessage({answer: "Madame"});
	//   else if (msg.question == "Madame who?")
	//     port.postMessage({answer: "Madame... Bovary"});
	// })
}, 100)


// }, 5000)
// }
