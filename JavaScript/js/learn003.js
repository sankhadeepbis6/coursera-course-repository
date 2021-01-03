// primitive data type are pass by value
// object are pass by reference

var a = 7;
var b = a;

console.log("val of a: " + a + ", val of b: " + b);

b = 100;
console.log("After change");
console.log("val of a: " + a + ", val of b: " + b);


console.log("----------In case of object----------")
var a = {x: 7};
var b = a;

console.log("val of a: " + a.x + ", val of b: " + b.x);

b.x = 100;
console.log("After change");
console.log("val of a: " + a.x + ", val of b: " + b.x);






