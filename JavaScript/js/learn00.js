var x = "Hello World!";

console.log(x);

var message = "In global";
console.log(message);

var a = function(){
    var message = "In a";
    console.log(message);
    b();
}

function b(){
    console.log(message);
}

a();


var value;
console.log(value);

if( value == undefined){
    console.log("The value is undefined");
}

value = 5;
if(value == undefined){
    console.log("The value is undefined");
}
else{
    console.log("The value is defined");
}


var val1 = 4;
var val2 = 4;

if(val1 == val2){
    console.log("Both are equal");
}

val1 = "4";
// it will convert the different dat type to same data type
if(val1 == val2){
    console.log("Both are equal");
}

// strict equality
if(val1 === val2){
    console.log("Both are equal");
}
else{
    console.log("Both are not equal");
}


// all false statement in javascript
if( false || null || undefined || "" || 0 || NaN ){
    console.log("This line would not execute");
}
else{
    console.log("All false");
}

// all true statement in javascript
if( true && "False" && 1 && -1 && "Hello"){
    console.log("All true")
}

function sideDish(dish){
    dish = dish || "nothing";
    console.log("The side dish is " + dish);
}

// bypass undefine
sideDish("Ice cream");
sideDish();









