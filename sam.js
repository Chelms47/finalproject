function myFunction() {
    var person = prompt("Please enter your email", "you@domain.com");
    if (person != null) {
        document.getElementById("news").innerHTML =
        "newsletter will be sent to " + person + "! thank you!";
    }
}