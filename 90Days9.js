
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage (message, sender, sendResponse) {
	console.log(message)
		// Purchase Price
		setTimeout(function() {
			document.getElementsByName("purchasePrice")[0].value = message.payload.purchasePrice
		}, 1000)

		// Trade In Price
		setTimeout(function() {
			document.getElementsByName("tradeInPrice")[0].value = message.payload.tradeIn
		}, 2000)

		// Quilified Rebates
		setTimeout(function() {
			document.getElementsByName("qualifiedRebates")[0].value = 0
		}, 3000)

		// Net Purchase Price
		setTimeout(function() {
			document.getElementsByName("netPurchasePrice")[0].value = message.payload.purchasePrice
		}, 4000)

		// Total tax paid
		setTimeout(function() {
			document.getElementsByName("totalTaxPaid")[0].value = message.payload.totalTax
		}, 5000)

		// Next  Click button
		setTimeout(function() {
			document.getElementsByName("submit.next")[0].click()
		}, 6000)
}
