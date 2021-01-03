var array1 = new Array();

array1[0] = 1;
array1[1] = "name";
array1[2] = function(name){
    console.log("value: " + name);
}
array1[3] = {
    name: "value"
}

console.log(array1);
array1[2](array1[1]);


var obj = {
    name: "name",
    age: "age",
    gander: "gander"
}

console.log("object elements");
for(var e in obj){
    console.log(e + " is " + obj[e]);
}

var array2 = [1, 2, 3]

console.log("array elements");
for(var e in array2){
    console.log(e + " is " + array2[e]);
}

array2.hello = "hi"
console.log("array after");
for(var e in array2){
    console.log(e + " is " + array2[e]);
}





