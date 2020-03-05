document.addEventListener('DOMContentLoaded', function() {
	// var xhr = new XMLHttpRequest();
	// xhr.open("GET", "http://localhost/phpchrome.php", true);  //Mention your database query file here
	// xhr.onreadystatechange = function() {

		// if (xhr.readyState == 4) {
			// varxhrjson = JSON.parse(xhr.responseText);
			/* Replace the below mentioned field id's with that of your form */
			// chrome.tabs.executeScript(null,{code:"document.getElementById('ap_customer_name').value = '"+varxhrjson['cname']+"'"});
			// chrome.tabs.executeScript(null,{code:"document.getElementById('ap_email').value = '"+varxhrjson['cmail']+"'"});
			// chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password').value = '"+varxhrjson['cpassword']+"'"});
			// chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password_check').value = '"+varxhrjson['cpassword']+"'"});
			// setTimeout(function(){},2000)
			// chrome.tabs.query({active: true}, function(tabs){
  	// 		console.log(tabs)
			// });
			chrome.tabs.getCurrent(function(tab){ console.log(JSON.stringify(tab,null, 2)); })

			// window.open('https://secure.servicearizona.com/gwRegister/gateway/Utils?action=login&url=https://secure.servicearizona.com/secure/gateway/MyAccount!3F!action!3D!accessTab&msg=')
			// Login Page
			setTimeout(function () {
				// chrome.tabs.executeScript(null,{code:"document.getElementById('fname').value = 'Success1'"});
				chrome.tabs.executeScript(null,{code:"document.getElementsByName('username')[0].value = 'james@usedvwaudi.com'"});
			}, 2000)
			setTimeout(function () {
				// chrome.tabs.executeScript(null,{code:"document.getElementById('lname').value = 'Success2'"});
				chrome.tabs.executeScript(null,{code:"document.getElementsByName('password')[0].value = 'james110'"});
			}, 2500)

			// Second Page
			setTimeout(function () {
				chrome.tabs.executeScript(null,{code:"document.getElementsByClassName('button100First')[0].click()"})
			}, 3000)

			setTimeout(function () {
				chrome.tabs.executeScript(null,{code:"document.getElementsByClassName('linksItem')[0].click()"})
				// If date picker is there
				// chrome.tabs.executeScript(null,{code:"document.getElementById('date').value = '1998-03-30'"});
			}, 3500)

			setTimeout(function () {
				chrome.tabs.executeScript(null, {code: "document.getElementById('sub').click()"})
			}, 4000)

			// chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password_check').value = '"+varxhrjson['cpassword']+"'"});
		// }
	// }
	// xhr.send();
});
