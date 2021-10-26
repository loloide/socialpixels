var socket;
var sf
socket = io.connect('http://localhost:3000');

function setup() {
  var canvas = createCanvas(200, 200);
  canvas.parent("canvasDiv")
  background(0);
  socket.on('mouse',
    // receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y + " " + data.h);
      // Draw recieved data
      fill(data.h);
      noStroke();

      rect(data.x, data.y, 1, 1);
    }
  );
}
// draw
function mousePressed() {
  sendmouse(mouseX,mouseY);
}

function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos + " " + hex);
  
  // send x, y and hex
  var data = {
    x: xpos,
    y: ypos,
    h: hex
  };

  socket.emit('mouse',data);
}


// colour picker
var colorWell;
var defaultColor = "000000";
var hex = "FFFFFF"
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
  console.log(hex)
  if (p) {
  p.style.color = event.target.value;
 }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}
