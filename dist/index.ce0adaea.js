var database = window.database;
var socket;
socket = io.connect("https://socialpixels.herokuapp.com/");
//setup
function setup() {
    database.readpixels();
    var canvas = createCanvas(200, 200);
    canvas.parent("canvasDiv");
    background("#e4e4e4");
    socket.on('mouse', // receive data
    function(data) {
        console.log("Got: " + data.x + "," + data.y + "," + data.h);
        // Draw recieved data
        fill(data.h);
        noStroke();
        rect(data.x, data.y, 1, 1);
    });
}
//see if the pixel is on valid coords
function mousePressed() {
    mouseX = parseInt(mouseX);
    mouseY = parseInt(mouseY);
    if (mouseX > 0 && mouseX < 200) {
        if (mouseY > 0 && mouseY < 200) sendmouse(mouseX, mouseY);
    }
}
//send mouse data (socket)
function sendmouse(xpos, ypos) {
    console.log("Sent: " + xpos + "," + ypos + "," + hex);
    // send x, y and hex
    var data = {
        x: xpos,
        y: ypos,
        h: hex
    };
    socket.emit('mouse', data);
    //send mouse data (firebase)
    database.writepixel(mouseX, mouseY);
}
// colour picker
var colorWell;
var defaultColor = "#e4e4e4";
var hex = "FFFFFF";
window.addEventListener("load", startup, false);
function startup() {
    colorWell = document.querySelector("#colorWell");
    colorWell.value = defaultColor;
    colorWell.addEventListener("input", updateFirst, false);
    colorWell.select();
}
function updateFirst(event) {
    var p = document.querySelector("p");
    hex = event.target.value;
    console.log(hex);
    if (p) p.style.color = event.target.value;
}
function updateAll(event) {
    document.querySelectorAll("p").forEach(function(p) {
        p.style.color = event.target.value;
    });
}
//dev do a little trolling <3
console.log("What are you looking at? There's nothing here");
var xinput;
var yinput;
function test() {
    var xinput = document.getElementById("x-input").value;
    var yinput = document.getElementById("y-input").value;
    sendmouse(xinput, yinput);
}
function savecanvas() {
    save('my-great-proejct.png');
}

//# sourceMappingURL=index.ce0adaea.js.map
