console.log("Running bacckground...")

// chrome.bookmarks.onCreated.addListener(function() {
//       // do something
//       console.log('window.performance.navigation.type', window.performance.navigation.type)
// });

chrome.browserAction.onClicked.addListener(buttonClicked)
let runContent4 = false

var arizonaLink = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="
var userHomeUrl = "https://secure.servicearizona.com/gwRegister/gateway/UserHome"
var secureGatewayUrl = "https://secure.servicearizona.com/secure/gateway/MyAccount?action=accessTab"
var DealerServiceUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/start.do"
var issueTRPUrl = "https://secure.servicearizona.com/az/mvd/dealer/webapp/dealer/authorizedTRP.do"

var extensionButtonClicked = false

function buttonClicked(tab) {
	console.log("button clicked", tab)
	chrome.tabs.create({ url: arizonaLink }, function(tab2) {
    console.log(tab2)
    extensionButtonClicked = true
  })
}

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	console.log(tab, "<<<<----------tab")
	chrome.tabs.sendMessage(tab.id, tab)
	if (extensionButtonClicked) {
		// chrome.tabs.executeScript(tab2.id, {file: "content.js"})
		if (tab.url === arizonaLink && performance.navigation.type === 0) {
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
	}
});
