function displaycontainer() {
    let q;
    let z = prompt("ENTER YOUR NAME ", "Guest");
    if (z != null) {
        q = ("Welcome " + z)

        document.getElementById("containerhead").innerHTML = q;
    }
}
function functiondis() {
    var x = document.getElementById("container");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function inside() {
    var x = document.getElementById("incon1");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
function functionc() {
    let x = document.getElementById("input1").value;
    let ans;
    if (x != "") {
        ans = ((x * 9 / 5) + 32);
    }
    else {
        alert("enter a valid value");
    }
    document.getElementById("B2A32").innerHTML = ans;
}

function functionc1() {
    let x = document.getElementById("C212").value;
    let ans;
    if (x != "") {
        ans = ( (x - 32) * 5 / 9);
    }
    else {
        alert("enter a valid value");
    }
    console.log(ans);
    document.getElementById("B2B33").innerHTML = ans;
}
function insideA() {
    var x = document.getElementById("inicon2");
    if (x.style.display == "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}