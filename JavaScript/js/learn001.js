// object creation
var company = new Object();
company.name = "self";
company.year = 2020;
company.ceo = new Object();
company.ceo.name = "unknown";
company.ceo.age = 0;


console.log(company.name);
console.log(company.ceo.name);
console.log(company["name"]);

var stock = "Stock Price";
company[stock] = 1100;
console.log(company[stock]);

// object creation
var house = {
    rooms: 5,

    people: {
        number: 4
    }

};

// creating a class
function Circle(radius){

    this.radius = radius;

    this.info = function(){
        console.log("the radius is: " + this.radius);
    }

}

// creating object function outside the function
Circle.prototype.getArea = function(){
    return Math.PI * Math.pow(this.radius, 2);
}


// creating a object
var myCircle = new Circle(4);
console.log(myCircle.info());
console.log(myCircle.getArea());










