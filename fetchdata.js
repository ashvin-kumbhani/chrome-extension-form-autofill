console.log("fetch here......called")

if (document.getElementById("idofcolor") === null) {
	document.getElementsByClassName("vehicle-button")[3].click()
}

var color = null
var Vin = null
var Liscence = null
var Dob = null
setTimeout(function() {
	if (!document.getElementsByClassName("purchaseFieldData")[21]) {
		document.getElementsByClassName("purchaseTableLabel")[3].click()
	}
	let ymm = document.getElementsByName("VehicleYearMakeModel")[0].value
	let ymmArr = ymm.split(' ')
	let year = ymmArr[0]
	let make = ymmArr[1]
	let model = ymmArr[2]
	setTimeout(function() {
		let style1 = document.getElementsByClassName("purchaseFieldData")[21].value
		color = document.getElementById("idofcolor").innerText
		Vin = document.getElementsByClassName("vehicle-details-vin")[0].innerText
		Liscence = document.getElementsByName("BuyerDl")[0].value
		Dob = document.getElementsByName("BuyerDob")[0].value

		console.log("color", color)
		console.log("Vin", Vin)
		console.log("Liscence", Liscence)
		console.log("Dob", Dob)
		let payload = {
			from: "fetchdata",
			year: year,
			make: make,
			model: model,
			style: style1,
			color: color,
			vin: Vin,
			liscence: Liscence,
			dob: Dob
		}
		console.log('payload', payload)
		var port = chrome.runtime.connect({name: "knockknock"});
		port.postMessage({payload: payload});
	}, 200)

	// port.onMessage.addListener(function(msg) {
	//   if (msg.question == "Who's there?")
	//     port.postMessage({answer: "Madame"});
	//   else if (msg.question == "Madame who?")
	//     port.postMessage({answer: "Madame... Bovary"});
	// })
}, 300)


// }, 5000)
// }
