
function convertTemp(inputTemp, inputUnit)

{var outputTemp;
	if (inputUnit === "F") {
		outputTemp = (inputTemp -32)*(5/9);
		console.log("temperature of " + inputTemp + "degrees fahrenheit is equal to " + outputTemp
	 + " degrees in celsius");
	}
	else if (inputUnit === "C"){
		outputTemp = inputTemp * 9/5 + 32;
		console.log("temperature of " + inputTemp + "degrees celsius is equal to " + outputTemp
	 + " degrees in fahrenheit");
	}

}
convertTemp(212, "C");
convertTemp(32, "C");
convertTemp(65, "C");
convertTemp(-40, "F");