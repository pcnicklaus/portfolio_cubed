function turnToTop() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateX(-90deg)";
}
function turnToBottom() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateX(90deg)";
}
function turnToBack() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(180deg)";
}
function turnToLeftSide() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(90deg)";
}
function turnToRightSide() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(-90deg)";
}
function turnToFront() {
    document.getElementsByClassName('cube')[0].style.transform = "rotateY(0deg)";
}
