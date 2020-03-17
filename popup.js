let a = document.getElementById("trp")
let b = document.getElementById("90day")

a.addEventListener('click', function () {
  console.log('a')
  chrome.tabs.query({active: true, currentWindow: true}, gotTabs)
  function gotTabs(tab) {
  	let msg = {message: "Trp clicked", from: "trp", tabInfo: tab[0]}
  	console.log("tab", tab)
  	// chrome.tabs.sendMessage(tab[0].id, msg)
  	let port = chrome.runtime.connect({name: "knockknock2"})
		port.postMessage({payload: msg})
  }
})

b.addEventListener('click', function () {
  console.log('b')
  chrome.tabs.query({active: true, currentWindow: true}, gotTabs)
  function gotTabs(tab) {
  	let msg = {message: "90day clicked", from: "90day", tabInfo: tab[0]}
  	console.log("tab", tab)
  	// chrome.tabs.sendMessage(tab[0].id, msg)
  	let port = chrome.runtime.connect({name: "knockknock2"})
		port.postMessage({payload: msg})
  }
})
