console.log("Running bacckground...")
// chrome.bookmarks.onCreated.addListener(function() {
//       // do something
//       console.log('window.performance.navigation.type', window.performance.navigation.type)
// });
// chrome.tabs.executeScript(null, {file: "fetchdata.js"} );

// chrome.browserAction.onClicked.addListener(buttonClicked)
let runScript = null
let runContent4 = false
let runContent6 = false
let counter = 0

// TRP and 90Day common URLs
var arizonaLink = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="
var userHomeUrl = "https://secure.servicearizona.com/gwRegister/gateway/UserHome"
var secureGatewayUrl = "https://secure.servicearizona.com/secure/gateway/MyAccount?action=accessTab"
var DealerServiceUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/start.do"

// TRP URLs
var issueTRPUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/authorizedTRP.do"
var TRPUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/trp/issue.do"
var ownerInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/enterOwnerInfo.do"
var registrationUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showOwnerInfo.do"
var confirmInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showConfirmInfo.do"
var alreadyLogin = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="

// 90Day URLs
var issuePermitUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/services.do"
var nonRecidentPermit = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/enterVIN.do"
var vehicleInquiry = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/vehicleInquiry.do"
var vehicleUpdate ="https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/updateVehicle.do"
// var registrationUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showOwnerInfo.do"
var ownerInfoURL = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/ownerInfo.do"
var purchaseInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/purchaseInfo.do"
var certifyInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/certifyInfo.do"
var showConfirmInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showConfirmInfo.do"
var confermationUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/nonres/confirmInfo.do"

var payload = null

var extensionButtonClicked = false

chrome.runtime.onConnect.addListener(function(port) {
	if (port.name == "knockknock") {
		console.assert(port.name == "knockknock")
  	port.onMessage.addListener(function(msg) {
	    console.log("------------>msg-->", msg)
	    payload = msg
  	})
	} else if (port.name == "knockknock2") {
		console.assert(port.name == "knockknock2")
  	port.onMessage.addListener(function(msg) {
	    console.log("------------>msg-->", msg)
	    if (msg.payload.from === "trp") {
	    	counter = 0
	    	runScript = msg.payload.from
	    	buttonClickedTrp(msg.payload.tabInfo)
	    }
  	})
	} else if (port.name == "knockknock3") {
		console.assert(port.name == "knockknock3")
		port.onMessage.addListener(function(msg) {
			if (msg.payload.from === "90day") {
	    	counter = 0
	    	console.log('msg-->',msg)
	    	runScript = msg.payload.from
	    	buttonClicked90days(msg.payload.tabInfo)
	    }
  	})
	}
})

// chrome.runtime.onConnect.addListener(function(port) {
  // console.assert(port.name == "knockknock2")
  // port.onMessage.addListener(function(msg) {
  //   console.log("------------>msg-->", msg)
  //   // payload = msg
  // })
// })

// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name == "knockknock2");
//   port.onMessage.addListener(function(msg) {
//     console.log("------------>msg-->", msg)
//     payload = msg
//   })
// })

function buttonClicked90days(tab) {
	console.log("button clicked 90", tab)
	// sendMessageCount = 0
	chrome.tabs.executeScript(tab.id, {file: "fetchdata90Day.js"} );
	chrome.tabs.create({ url: arizonaLink }, function(tab2) {
	  console.log(tab2)
	  extensionButtonClicked = true
	})
}

function buttonClickedTrp (tab) {
	console.log("button clicked", tab)
	runContent4 = false
	chrome.tabs.executeScript(tab.id, {file: "fetchdata.js"} );
	chrome.tabs.create({ url: arizonaLink }, function(tab2) {
    console.log(tab2)
    extensionButtonClicked = true
  })
}

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	if (runScript === "trp") {
		console.log(tab, "<<<<----------tab")
		if (counter < 5) {
			chrome.tabs.sendMessage(tab.id, tab)
			counter++
		}

		if (extensionButtonClicked) {
			// chrome.tabs.executeScript(tab2.id, {file: "content.js"})
			if (tab.url === arizonaLink) {
				chrome.tabs.executeScript(tab.id, {file: "content.js"} )
			}

			if (tab.url === userHomeUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content2.js"} )
			}

			if (tab.url === secureGatewayUrl && runContent4 === false) {
				chrome.tabs.executeScript(tab.id, {file: "content3.js"} )
				runContent4 = true
			}

			if (tab.url === DealerServiceUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content4.js"} )
			}

			if (tab.url === issueTRPUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content5.js"} )
			}

			if (tab.url === TRPUrl) {
				console.log(payload)
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content6.js"} )
			}

			if (tab.url === ownerInfoUrl) {
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content7.js"} )
			}

			if (tab.url === registrationUrl) {
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content8.js"} )
			}

			if (tab.url === confirmInfoUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content9.js"} )
			}

			if (tab.url === alreadyLogin) {
				chrome.tabs.executeScript(tab.id, {file: "content10.js"} )
			}
		} // <<<<<<<<<<<<<<90 Day PERMIT SCRIPT STARTS HERE........>>>>>>>>>>>>>>>
	} else if (runScript === "90day") {
		if (extensionButtonClicked) {
			if (tab.url === arizonaLink) {
				chrome.tabs.executeScript(tab.id, {file: "90Days.js"} )
			}

			if (tab.url === userHomeUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days2.js"} )
			}

			if (tab.url === secureGatewayUrl && runContent4 === false) {
				chrome.tabs.executeScript(tab.id, {file: "90Days3.js"} )
				runContent4 = true
			}

			if (tab.url === DealerServiceUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days4.js"} )
			}

			if (tab.url === issuePermitUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days5.js"} )
			}

			if (tab.url === nonRecidentPermit) {
				if (payload != null){
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "90Days6.js"} )
			}

			if (tab.url === vehicleInquiry) {
				console.log("payload",payload)
				if (payload != null) {
						console.log("payload777777", payload)
						chrome.tabs.sendMessage(tab.id, payload)
						chrome.tabs.executeScript(tab.id, {file: "90Days7.js"} )
				}
			}

			if (tab.url === purchaseInfoUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days12.js"} )
			}

			if (tab.url === vehicleUpdate) {
				if (payload != null) {
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "90Days8.js"} )
			}
 			// Already Login URL
			if (tab.url === alreadyLogin) {
				chrome.tabs.executeScript(tab.id, {file: "content10.js"} )
			}

			if (tab.url === ownerInfoURL) {
				if (payload != null) {
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "90Days9.js"} )
			}

			if (tab.url === certifyInfoUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days10.js"} )
			}

			if (tab.url === confermationUrl) {
				chrome.tabs.executeScript(tab.id, {file: "90Days11.js"} )
			}

			if (tab.url === showConfirmInfoUrl) {
				if (payload != null) {
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "90Days13.js"} )
			}
		}
	}
});
