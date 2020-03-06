console.log("Running bacckground...")

// chrome.bookmarks.onCreated.addListener(function() {
//       // do something
//       console.log('window.performance.navigation.type', window.performance.navigation.type)
// });

chrome.browserAction.onClicked.addListener(buttonClicked)

function buttonClicked(tab) {
	// setInterval(function(){
		let win = window.open('https://www.google.com')
		win.test = function () {
        win.alert("Starting magic...");
        win.log("kjfgljdflg")
    }
    win.test()
		console.log(win)
		console.log("button clicked", tab)
	let msg = {
		message: "Mesage is here!!!"
	}
	chrome.tabs.sendMessage(tab.id, msg)
	// }, 3000)
	// window.location.reload(false);
	// window.location.replace('http://www.google.com')

}
