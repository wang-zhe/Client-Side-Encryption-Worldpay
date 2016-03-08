
var errorCodesArray = {
	"101" : "Please enter credit card number",
	"102" : "Please enter your credit card in between 12-20 digits",
	"103" : "Please enter a valid credit card number",
	"201" : "Please have the CVV entered in 3 or 4 digits",
	"301" : "Please enter the expiry month",
	"302" : "Please enter the expiry month in the format MM such like, 01, 12",
	"303" : "Please enter the expiry month from 01 to 12",
	"304" : "Please enter the expiry year",
	"305" : "Please enter the expiry month in the format YYYY such like 2018",
	"306" : "Please enter a future date",
	"401" : "Please enter the name on the card",
	"402" : "Please enter the card holder name less than 30 characters"
 	
};


var publicKey = "1#10001#b1e12ede33b8f3beb197bef2ab8d155e699b50664c747178517748029975a4d060fcb715d38c07316c087f39d28f593b4fd73f7427d3d514a6ecd761a9701673ab20bda3cc7dcf28b2fbb045c84a20d759d737c7333e3d434de1e1ab7fe7f6898755bb1ff21eb09ca187679f4d1dd02300b0dbad0f4d8b5f87d43574f6a4583295029111d3806f4435f7674ced698f50dfb43ca3304d4ad5483ded7c6e9e62296cc3433f4c120c10470bb93c949a7c55198a0ef31db35d7461b9400ad26f578584c56f6a1872b79ebbc6eed2d79278df5f81277501062719894981ab4540b7b147dbee02d34c33c408c39e610eb0655b21f1a86599dc8e32a393af4f5c42a8cd";


window.onload = function(){
	function errorHandler(errorCodes) {
		console.log(errorCodes);
		for (var i=0; i<=errorCodes.length-1; i++) {
			var html = '<div class="alert alert-warning" role="alert">';
			html += errorCodesArray[errorCodes[i]];
			html += '</div>';
			$("#warning").append(html);
		}
		
		
	}
	Worldpay.setPublicKey(publicKey);
	Worldpay.useForm(errorHandler);
	
	
}

