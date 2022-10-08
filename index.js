// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    let text = document.getElementById("text");
    console.log("text", text)
    text.textContent = "This is really cool!"
});


const event = document.createEvent("event")
event.initEvent("DOMContentLoaded", true, true)
window.document(dispatchEvent)(event);


document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("This is really cool!");
});