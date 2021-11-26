var database = window.database;
var socket;
var zoomed = false
socket = io.connect("https://socialpixels.herokuapp.com/")
//setup
function setup() {
  database.readpixels(); 
  var canvas = createCanvas(200, 200);
  canvas.parent("canvasDiv")
  background("#e4e4e4");
  socket.on('mouse',
    // receive data
    function(data) {
      console.log("Got: " + data.x + "," + data.y + "," + data.h);
      // Draw recieved data
      fill(data.h);
      noStroke();
      rect(data.x, data.y, 1, 1);
    }
  );
}

var xinput
var yinput

function send() {
  var xinput = document.getElementById("x-input").value;
  var yinput = document.getElementById("y-input").value;
  sendmouse(xinput, yinput);
}

//see if the pixel is on valid coords
function mousePressed() {
  
  if (zoomed == true) {
    mouseX / 2;
    mousey / 2;
  }
  mouseX = parseInt(mouseX)
  mouseY = parseInt(mouseY)
  sendmouse(mouseX, mouseY)
}
//send mouse data (socket)
function sendmouse(xpos, ypos) {
  // send x, y and hex
  var data = {
    x: xpos,
    y: ypos,
    h: hex
  };
  
  if (xpos > 0 && xpos < 200) {
    if (ypos > 0 && ypos < 200){
      socket.emit('mouse', data);
      console.log("Sent: " + xpos + "," + ypos + "," + hex);
      //send mouse data (firebase)
      database.writepixel(xpos, ypos)
    }
  }
}

// colour picker
var colorWell;
var defaultColor = "#e4e4e4";
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
  if (p) {
  p.style.color = event.target.value;
 }
}
function updateAll(event) {
  document.querySelectorAll("p").forEach(function(p) {
    p.style.color = event.target.value;
  });
}

window.addEventListener("wheel", function(e) {
  if (document.getElementById("canvas-input").style.scale == 1) {
    document.getElementById("canvas-input").style.scale = 2
    zoomed = true
  }
  else {
    document.getElementById("canvas-input").style.scale = 1
    zoomed = false
  }
});

function savecanvas() {
  save('my-great-proejct.png');
}

//dev do a little trolling <3
console.log("What are you looking at? There's nothing here")