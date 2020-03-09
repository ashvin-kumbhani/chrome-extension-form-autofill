// chrome.runtime.onConnect.addListener(function(port) {
//   console.assert(port.name == "knockknock2");
//   port.onMessage.addListener(function(msg) {
//     console.log("------------>msg2222-->", msg)
//     payload = msg
//     document.getElementsByName("vinNumber")[0].value = "sjg"
//   })
// })
console.log("content script run 6...........")
chrome.runtime.onMessage.addListener(gotMessage)

function gotMessage(msg, response, sender) {
	console.log("content script run 6...........222222", msg)
	if (msg.payload) {
		// if (msg.payload.from === "vin") {
		console.log(msg)
		document.getElementsByName("vinNumber")[0].value = msg.payload.vin
		document.getElementsByName("vehPriColor")[0].value = mapColor(msg.payload.color)
		document.getElementsByName("transferPlate")[1].click()
		document.getElementsByName("ownerQuestion")[1].click()
		document.getElementsByClassName("button140First")[0].click()
		}
		// var port = chrome.runtime.connect({name: "knockknock2"});
		// port.postMessage({payload: msg});
	// }
}

function mapColor(color) {
	switch(color) {
  case "Aluminium":
    // code block
    return "ALU"
    break;

  case "Amethyst":
    return "AME"
    break;

  case "Beige":
    return "BGE"
    break;

   case "Black":
    return "BLK"
    break;

   case "Blue":
    return "BLU"
    break;

   case "Blue, DARK":
    return "DBL"
    break;

   case "Blue, Light":
    return "LBL"
    break;

   case "Bronze":
    return "BRZ"
    break;

   case "Brown":
    return "BRO"
    break;

   case "Camouflage":
    return "AME"
    break;

   case "Chrome":
    return "COM"
    break;

   case "Copper":
    return "CPR"
    break;

   case "Cream":
    return "CRM"
    break;

   case "Gold":
    return "GLD"
    break;

   case "Gray":
    return "GRY"
    break;

   case "Green":
    return "GRN"
    break;

   case "GREEN, DARK":
    return "DGR"
    break;

   case "Green, Light":
    return "LGR"
    break;

   case "Zvory":
    return "IVR"
    break;

   case "Lavender":
    return "LAV"
    break;

   case "Maroon":
    return "MAR"
    break;

   case "Multicolored":
    return "MUL"
    break;

   case "Mauve":
    return "MVE"
    break;

   case "Orange":
    return "ONG"
    break;

   case "Pink":
    return "PNK"
    break;

   case "Purple":
    return "PLE"
    break;

   case "Red":
    return "RED"
    break

   case "Silver":
    return "SIL"
    break

   case "Stainless Steel":
    return "SST"
    break

   case "Tan":
    return "TAN"
    break

   case "Taupe":
    return "TPE"
    break

   case "Teal":
    return "TEA"
    break

   case "Turquoise":
    return "TRQ"
    break

   case "White":
    return "WHI"
    break

   case "Yellow":
    return "YEL"
    break
  }
}
