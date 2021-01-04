// it will be called before image load or CSS
document.addEventListener("DOMContentLoaded", function (event){
    console.log("DOM Content Loaded is called");
})

console.log(document.getElementById("title"))

function input_response(){
    var name = document.getElementById("name_input").value;

    var message = "<h2>Hello " + name + "!</h2>";

    document.getElementById("content").textContent = name;
    document.getElementById("message").innerHTML = message;

    // this is CSS selector
    var title = document.querySelector("#title").textContent;

    title += " and loving it";

    document.querySelector("#title").textContent = title;
}

function event_fun(){
    // triggering what ever button is used
    // here this pointed to the button
    this.textContent = "Used";
    console.log("The event is called");
}

function value_fun(){
    this.textContent = "Used";
    console.log("The value is called");
}

// event handler with js
document.querySelector("#button_event").addEventListener("click", event_fun);

document.querySelector("#button_value").onclick = value_fun;

// event
// every event listener function has a argument event
document.querySelector("body").addEventListener("mousemove", function (event){
    if(event.shiftKey === true){
        console.log("x: " + event.clientX + " y: " + event.clientY);
    }
});














