
// setTimeout(function(){}, 2000)
// For Individual as purchaser: **************************************************
chrome.runtime.onMessage.addListener(gotMessage)
function gotMessage (message, sender, sendResponse) {
	console.log("message", message)
			if (message.payload.isBuyer) {
		// First
				setTimeout(function(){
					document.getElementsByName("name.firstName")[0].value = message.payload.firstName
				}, 2000)
		// MI
				setTimeout(function(){
					document.getElementsByName("name.middleInitial")[0].value
				}, 3000)

		// Last
				setTimeout(function(){
					document.getElementsByName("name.lastName")[0].value = message.payload.lastName
				}, 4000)

		// Suffix
				setTimeout(function(){
					document.getElementsByName("name.suffix")[0].value
				}, 5000)

		// Driver Lisence Number
				setTimeout(function(){
					document.getElementsByName("driverLicenseNumber")[0].value = message.payload.liscenceNumber
				}, 6000)

		// Driver Liscence State
				setTimeout(function(){
					document.getElementsByName("driverLicenseState")[0].value = message.payload.state
				}, 7000)
	} else {
		// <-------------------------------------OR---------------------------------------->
		// Organization as purchaser: **************************************************
		// name of organization
		document.getElementsByName("organization")[0].value

		// ein
		document.getElementsByName("ein")[0].value
	}

	// setTimeout(function(){
	// 	document.getElementsByName("submit.next")[0].click()
	// }, 8000)

	// Street
		setTimeout(function(){
			document.getElementsByName("address.address1")[0].value = message.payload.buyerStreetAddress
		}, 9000)

		// City
			setTimeout(function(){
				document.getElementsByName("address.city")[0].value = message.payload.city
			}, 9000)

		// State
			setTimeout(function(){
				// document.getElementsByName("address.state")[0].value = message.payload.state
				document.getElementsByName("address.state")[0].value = "CA"
			}, 9000)

		// Country
			setTimeout(function(){
				document.getElementsByName("address.country")[0].value = message.payload.country
			}, 9000)

		// Zip code
			setTimeout(function(){
				document.getElementsByName("address.zip")[0].value = message.payload.zipCode
				document.getElementsByName("address.zip2")[0].value
			}, 10000)

		// next Button click
		setTimeout(function(){
			document.getElementsByName("submit.next")[0].click()
		}, 11000)
}
