const convertToCelsius = function(temp) {
   let farenheit = (temp - 32) * 5/9
   let oneDecimalFaren = Math.round(farenheit *10)/10
  return oneDecimalFaren
};

const convertToFahrenheit = function(temp) {
   let celsius = (temp * 9/5 + 32)
   let oneDecimalCelsius = Math.round(celsius *10)/10
  return oneDecimalCelsius
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
