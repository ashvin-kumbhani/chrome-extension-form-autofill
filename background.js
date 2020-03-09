console.log("Running bacckground...")

// chrome.bookmarks.onCreated.addListener(function() {
//       // do something
//       console.log('window.performance.navigation.type', window.performance.navigation.type)
// });

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {

	console.log("button clicked", tab)
	let msg = {
		message: "Mesage is here!!!"
	}
	chrome.tabs.sendMessage(tab.id, tab)
	// First page autofill
	chrome.tabs.executeScript(tabId, {file: "content.js"} );

	// }, 3000)
	// window.location.reload(false);
	// window.location.replace('http://www.google.com')
}

chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	console.log(tab, "<<<<----------tab")
	let userHomeUrl = "https://secure.servicearizona.com/gwRegister/gateway/UserHome"

	if (tab.url === userHomeUrl) {
		chrome.tabs.executeScript(tabId, {file: "content2.js"} );
	}
  // if (){
  //   chrome.tabs.executeScript(tabId, {file: "program.js"} );
  // }
});
