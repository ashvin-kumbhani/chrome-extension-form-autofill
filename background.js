console.log("Running bacckground...")

// chrome.bookmarks.onCreated.addListener(function() {
//       // do something
//       console.log('window.performance.navigation.type', window.performance.navigation.type)
// });

chrome.browserAction.onClicked.addListener(buttonClicked)
var arizonaLink = "https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg="
var userHomeUrl = "https://secure.servicearizona.com/gwRegister/gateway/UserHome"
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
	}
});
