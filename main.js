var name = prompt("What is your name?");

document.getElementById('promptName').innerHTML = "Welcome, " + name + "!";


function aboutMeCollapse() {

var x = document.getElementById("about-me");

if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function myWorkCollapse() {

var x = document.getElementById("my-work");

if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}