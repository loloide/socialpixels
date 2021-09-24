var socket;
socket = io.connect('http://localhost:3000');

function setup() {
  createCanvas(200, 200);
  background(0);
  socket.on('mouse',
    // receive data
    function(data) {
      console.log("Got: " + data.x + " " + data.y + " " + data.h);
      // Draw recieved datta
      fill(data.h);
      noStroke();
      rect(data.x, data.y, 1, 1);
    }
  );
}

function mousePressed() {
  fill(hex);
  noStroke();
  rect(mouseX,mouseY,1,1);
  sendmouse(mouseX,mouseY);
}

function sendmouse(xpos, ypos) {
  console.log("sendmouse: " + xpos + " " + ypos + " " + hex);
  
  // Make a little object with x, y and hex
  var data = {
    x: xpos,
    y: ypos,
    h: hex
  };

  socket.emit('mouse',data);
}


