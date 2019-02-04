// Q2. Calculate properties of a circle, using the definitions here.
//
//     Store a radius into a variable.
//     Calculate the circumference based on the radius, and output "The circumference is NN".
//     Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
var pi=3.14;

const circle = 2 * pi * radius;
const area = pi * radius * radius;
console.log("The circumference is "+circle);
console.log("The area is "+area);
