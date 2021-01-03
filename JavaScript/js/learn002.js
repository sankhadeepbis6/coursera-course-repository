// function is treated like a object in JavaScript

function mul(x, y){
    return x * y;
}

console.log(mul(4, 5));

mul.version = "v.1.0";


console.log(mul);
console.log(mul.version);

// return na function
function makeMultiplier(multiplier){
    var fun = function(x){
        return multiplier * x;
    }

    return fun;
}

var multiplyBy3 = makeMultiplier(3);

console.log(multiplyBy3(10));


// passing function as an argument

function callFun(x, operation){
    return operation(x);
}

var value = callFun(300, multiplyBy3);
console.log(value);



