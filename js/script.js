// var cubex = -22,    // initial rotation
// cubey = -38,
// cubez = 0;

// function rotate(variableName, degrees) {
//     window[variableName] = window[variableName] + degrees;
//     rotCube(cubex, cubey, cubez);
// }
// function rotCube(degx, degy, degz){
//     segs = "rotateX("+degx+"deg) rotateY("+degy+"deg) rotateZ("+degz+"deg) translateX(0) translateY(0) translateZ(0)";
//     document.getElementById('cube').css({"transform":segs});
// }

function turnToTop() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateX(-90deg)";
}
function turnToBottom() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateX(90deg)";
}
function turnToBack() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(180deg)";
}
function turnToLeftSide() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(90deg)";
}
function turnToRightSide() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(-90deg)";
}
function turnToFront() {
    console.log('here');
    console.log("hh", document.getElementsByClassName('cube'))
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(0deg)";
}

// function turnLeft() {
//     rotate("cubey", -90);
// }
// function flipCube() {
//     rotate("cubez", -180);
// }