function convert() {
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var inputValue = document.getElementById("inputValue").value;
  var result = document.getElementById("result");

  var conversionFactors = {
    kilometers: {
      miles: 0.621371,
    },
    miles: {
      kilometers: 1.60934,
    },
    pounds: {
      kilograms: 0.453592,
    },
    kilograms: {
      pounds: 2.20462,
    },
  };

  // Perform the conversion
  var conversionFactor = conversionFactors[fromUnit][toUnit];
  var convertedValue = inputValue * conversionFactor;

  // Update the result input field with the converted value
  result.value = convertedValue.toFixed(2);
}
