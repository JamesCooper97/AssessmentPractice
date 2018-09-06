function webPageDropDown() {
    document.getElementById("webpageSelection").style.display = "block";
    console.log("webpage dropdown hovered");
}

function disciplineDropDown() {
    document.getElementById("disciplineSelection").style.display = "block";
    console.log("discipline dropdown hovered");
}

function userDropDown() {
    document.getElementById("userSelection").style.display = "block";
    console.log("discipline dropdown hovered");
}

function closeAll() {
    document.getElementById("webpageSelection").style.display = "none";
    document.getElementById("disciplineSelection").style.display = "none";
    console.log("close all");
}

function validateForm() {
    var x = document.forms["signup"]["fname"].value;
    var y = document.forms["signup"]["sname"].value;
    var z = document.forms["signup"]["email"].value;
    if (x=="" || y=="" || z==""){
        alert("Empty Fields");
        return false;
    }
}