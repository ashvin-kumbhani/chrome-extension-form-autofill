console.log('fetching data')

// document.getElementsByClassName("price-table-button-name")[0].click()

setTimeout(function() {
	let Vin = document.getElementsByClassName("vehicle-details-vin")[0].innerText
	console.log("Vin", Vin)
	if (!document.getElementsByName("VehicleYearMakeModel")[0]) {
		document.getElementsByClassName("price-table-button-name")[1].click()
	}
	if (!document.getElementsByClassName("purchaseFieldData")[21]) {
		document.getElementsByClassName("purchaseTableLabel")[3].click()
	}
	if (!document.getElementsByClassName("price-table-button-left-arrow")[0]) {
		setTimeout(function() {
			// document.getElementsByClassName("price-table-button-up-arrow")[1].click()
			if (document.getElementsByClassName("price-table-button-up-arrow")[1]) {
				document.getElementsByClassName("price-table-button-up-arrow")[1].click()
			}
		}, 100)
	}
	if (!document.getElementsByClassName("price-table-add-dropdown-div")[1]) {
		setTimeout(function() {
			if (document.getElementsByClassName("price-table-button-left-arrow")[0]) {
				document.getElementsByClassName("price-table-button-left-arrow")[0].click()
			}
		}, 200)
	}
	if (!document.getElementById("TradeIn")) {
		setTimeout(function(){
			if (document.getElementsByClassName("price-table-add-dropdown-div")[1]) {
				document.getElementsByClassName("price-table-add-dropdown-div")[1].click()
			}
		}, 300)
	}
	// ****
	// document.getElementsByClassName("price-table-button-up-arrow")[1].click()
	// document.getElementsByClassName("price-table-button-left-arrow")[0].click()
	// document.getElementsByClassName("price-table-add-dropdown-div")[1].click()
	// document.getElementById("TradeIn").value
	// ***
	// document.getElementsByClassName("purchaseTableLabel")[3].click()
	setTimeout(function(){
		let ymm = document.getElementsByName("VehicleYearMakeModel")[0].value
		let ymmArr = ymm.split(' ')
		let year = ymmArr[0]
		let make = ymmArr[1]
		let model = ymmArr[2]
		let style1 = document.getElementsByClassName("purchaseFieldData")[21].value
		//*********//
		let fullName = document.getElementsByName("BuyerName")[0].value
		let isBuyer = fullName.includes(',') ? true : false
		let nameArr = fullName.split(' ')
		let buyerDl = document.getElementsByName("BuyerDl")[0].value
		let buyerDlArr = buyerDl.split(' ')
		let liscenceNumber = buyerDlArr[0]
		let cityStateZip = document.getElementsByName("BuyerCityStateZip")[0].value
		let stateArr = cityStateZip.split(' ')
		let zipCode = stateArr[2]
		// let cityState = stateArr[0].split(',')
		let cityComa = stateArr[0]
		let city = cityComa.replace(',' , '')
		let state = stateArr[1]
		let buyerState = stateArr[1]
		let buyerStreetAdd = document.getElementsByName("BuyerStreetAdd")[0].value
		let priceString = document.getElementById("Price").value
		let priceArr = priceString.split('$')
		let purchasePrice = Math.round(parseFloat(priceArr[1].replace(',' , '')))
		let tradeInStr = document.getElementById("TradeIn").value
		let tradeInFloat = parseFloat(tradeInStr)
		let tradeIn = Math.round(tradeInFloat)
		let netPurchase = purchasePrice - tradeIn
		let totalTax = Math.round(parseFloat(document.getElementById("CalcTax").value))

		payload = {
			isBuyer: isBuyer,
			vin: Vin,
			year: year,
			make: make,
			model: model,
			style: style1,
			firstName: nameArr[0].replace(',' , ''),
			lastName: nameArr[1],
			liscenceNumber: liscenceNumber,
			buyerStreetAddress: buyerStreetAdd,
			purchasePrice: purchasePrice,
			tradeIn: tradeIn,
			netPurchase: netPurchase,
			totalTax: totalTax,
			city: city,
			state: state,
			zipCode: zipCode,
			country: "USA"
		}
		console.log("payloadpayload--->", payload)
		var port = chrome.runtime.connect({name: "knockknock"});
		port.postMessage({payload: payload})
	}, 500);
}, 700)
