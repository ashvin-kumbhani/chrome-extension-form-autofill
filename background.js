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

var arizonaLink = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="
var userHomeUrl = "https://secure.servicearizona.com/gwRegister/gateway/UserHome"
var secureGatewayUrl = "https://secure.servicearizona.com/secure/gateway/MyAccount?action=accessTab"
var DealerServiceUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/start.do"
var issueTRPUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/authorizedTRP.do"
var TRPUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/trp/issue.do"
var ownerInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/enterOwnerInfo.do"
var registrationUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showOwnerInfo.do"
var confirmInfoUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/showConfirmInfo.do"
var alreadyLogin = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="

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
	    // payload = msg
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
				chrome.tabs.executeScript(tab.id, {file: "content.js"} );
			}

			if (tab.url === userHomeUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content2.js"} );
			}

			if (tab.url === secureGatewayUrl && runContent4 === false) {
				chrome.tabs.executeScript(tab.id, {file: "content3.js"} );
				runContent4 = true
			}

			if (tab.url === DealerServiceUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content4.js"} );
			}

			if (tab.url === issueTRPUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content5.js"} );
			}

			if (tab.url === TRPUrl) {
				console.log(payload)
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content6.js"} );
			}

			if (tab.url === ownerInfoUrl) {
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content7.js"} );
			}

			if (tab.url === registrationUrl) {
				if (payload != null) {
					console.log("payload------->", payload)
					chrome.tabs.sendMessage(tab.id, payload)
				}
				chrome.tabs.executeScript(tab.id, {file: "content8.js"} );
			}

			if (tab.url === confirmInfoUrl) {
				chrome.tabs.executeScript(tab.id, {file: "content9.js"} );
			}

			if (tab.url === alreadyLogin) {
				chrome.tabs.executeScript(tab.id, {file: "content10.js"} );
			}
		}
	}
});
