//     Q3. The Temperature Converter
//
// Store a celsius temperature into a variable.
//     Convert it to fahrenheit and output "NN°C is NN°F".
//     Now store a fahrenheit temperature into a variable.
//     Convert it to celsius and output "NN°F is NN°C."

var celsius = 12;

const fahrenheit = (celsius * 9/5)+32;
console.log(celsius+"°C is "+fahrenheit+"°F");

var f = 32;

const c = (f - 32)* 5/9;
console.log(f+"°F is "+c+"°C.");
