let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// GLOBAL VARIABLES
let x = 30
let y = 30

let mousex, mousey

let rightKeyPressed = false;
let leftKeyPressed = false;
let upKeyPressed = false;
let downKeyPressed = false;



window.addEventListener("load", draw);

function draw() {
  // LOGIC
  if (rightKeyPressed) {
    x += 5;
  }

  if (leftKeyPressed) {
    x += -5;
  }

  if (upKeyPressed) {
    y += 5
  }

  if (downKeyPressed) {
    y += -5
  }

  if (x <= 10) {
    x = 30
    y = 30
  } else if (x >= cnv.width - 10) {
    x = 30
    y = 30
  } else if (x <= cnv.width - 50 && y >= 65 && y <= 85) {
    x = 30
    y = 30
  } else if (x >= 50 && y >= 125 && y <= 145) {
    x = 30
    y = 30
  } else if (x >= 140 && x <= 500 && y >= 220 && y <= 240) {
    x = 30
    y = 30
  } else if (x >= 570 && x <= cnv.width && y >= 220 && y <= 240) {
    x = 30
    y = 30
  } else if (x >= 105 && x <= 745 && y >= 280 && y <= 300) {
    x = 30
    y = 30
  } else if (x >= 0 && x <= 56 && y >= 220 && y <= 240) {
    x = 30
    y = 30
  } else if (x > 550 && x < cnv.width && y > 335 && y < 360) {
    x = 30
    y = 30
  } else if (y > 335 && y < 360 && x < 495 && x > 400) {
    x = 30
    y = 30
  } else if (x >= 495 && x <= cnv.width - 60 && y >= 450 && y <= 460) {
    x = 30
    y = 30
  } else if (x >= 555 && x <= cnv.width && y >= 400 && y <= 410) {
    x = 30
    y = 30
  } else if (x >= 200 && x <= cnv.width && y >= 530 && y <= 540) {
    x = 30
    y = 30
  } else if (x >= 0 && x <= 115 && y >= 530 && y <= 540) {
    x = 30
    y = 30
  } else if (x >= 0 && x <= 100 && y >= 225 && y <= 235) {
    x = 30
    y = 30
  } else if (x >= 50 && x <= 150 && y >= 175 && y <= 185) {
    x = 30
    y = 30
  } else if (x >= 200 && x <= 410 && y >= 395 && y <= 405) {
    x = 30
    y = 30
  } else if (x <= 360 && x >= 110 && y >= 345 && y <= 355) {
    x = 30
    y = 30
  }




  if (y >= cnv.height - 10) {
    x = 30
    y = 30
  } else if (y <= 15) {
    y = 30
    x = 30
  } else if (y >= 130 && y <= 230 && x >= 500 && x <= 510) {
    y = 30
    x = 30
  } else if (y >= 130 && y <= 230 && x >= 560 && x <= 570) {
    y = 30
    x = 30
  } else if (y >= 450 && y <= 540 && x >= cnv.width - 70 && x <= cnv.width - 60) {
    x = 30
    y = 30
  } else if (y >= 350 && y <= 410 && x <= 560 && x >= 550) {
    x = 30
    y = 30
  } else if (y >= 345 && y <= 460 && x >= 490 && x <= 500) {
    x = 30
    y = 30
  } else if (y >= 395 && y <= 540 && x >= 195 && x <= 205) {
    x = 30
    y = 30
  } else if (y >= 350 && y <= 540 && x >= 110 && x <= 120) {
    x = 30
    y = 30
  } else if (y >= 230 && y <= 290 && x >= 90 && x <= 100) {
    x = 30
    y = 30
  } else if (y >= 180 && y <= 230 && x >= 140 && x <= 150) {
    x = 30
    y = 30
  } else if (y >= 350 && y <= 400 && x >= 400 && x <= 410) {
    x = 30
    y = 30
  } else if (y >= 290 && y <= 350 && x >= 350 && x <= 360) {
    x = 30
    y = 30
  }


  if (x >= cnv.width - 50 && y >= cnv.height - 60) {
    alert("GOOD JOB")
    x = 30
    y = 30
    rightKeyPressed = false;
    leftKeyPressed = false;
    upKeyPressed = false;
    downKeyPressed = false;
  }


  // DRAWING
  // Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // Draw Start
  ctx.fillStyle = "skyblue";
  ctx.fillRect(0, 10, 60, 60);

  // Draw Maze
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, cnv.width, 10);

  ctx.fillRect(0, 70, cnv.width - 50, 10);

  ctx.fillRect(50, 130, cnv.width, 10);

  ctx.fillRect(50, 130, 10, 50);

  ctx.lineWidth = 10;
  ctx.strokeStyle = "green"
  ctx.beginPath()
  ctx.moveTo(50, 180)
  ctx.lineTo(150, 180)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.strokeStyle = "green"
  ctx.beginPath()
  ctx.moveTo(145, 180)
  ctx.lineTo(145, 230)
  ctx.stroke();


  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(95, 230)
  ctx.lineTo(95, 290)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(140, 230)
  ctx.lineTo(500, 230)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(90, 290)
  ctx.lineTo(740, 290)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(100, 230)
  ctx.lineTo(0, 230)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(500, 235)
  ctx.lineTo(500, 130)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(570, 235)
  ctx.lineTo(570, 130)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(570, 230)
  ctx.lineTo(cnv.width, 230)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(cnv.width, 350)
  ctx.lineTo(550, 350)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(555, 350)
  ctx.lineTo(555, 410)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(495, 345)
  ctx.lineTo(495, 460)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(495, 350)
  ctx.lineTo(400, 350)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(555, 405)
  ctx.lineTo(cnv.width, 405)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(495, 455)
  ctx.lineTo(cnv.width - 60, 455)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(cnv.width - 65, 450)
  ctx.lineTo(cnv.width - 65, 540)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(cnv.width, 0)
  ctx.lineTo(cnv.width, 540)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(405, 350)
  ctx.lineTo(405, 400)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(410, 400)
  ctx.lineTo(200, 400)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(355, 290)
  ctx.lineTo(355, 350)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(360, 350)
  ctx.lineTo(110, 350)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(115, 350)
  ctx.lineTo(115, 540)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(200, 395)
  ctx.lineTo(200, 540)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(115, 535)
  ctx.lineTo(0, 535)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(200, 535)
  ctx.lineTo(cnv.width, 535)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(0, 70)
  ctx.lineTo(0, cnv.height)
  ctx.stroke();

  ctx.lineWidth = 10;
  ctx.beginPath()
  ctx.moveTo(0, cnv.height)
  ctx.lineTo(cnv.width, cnv.height)
  ctx.stroke();

  // DRAW END
  ctx.fillStyle = "yellow";
  ctx.fillRect(cnv.width - 60, cnv.height - 60, 60, 55);

  // Draw Circle
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, 10, 0, 2 * Math.PI)
  ctx.fill();

  // Tell draw to run again at 60FPS
  requestAnimationFrame(draw);
}

// EVENT STUFF
document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  // Get rectangle info about canvas location
  let cnvRect = cnv.getBoundingClientRect();
  // Calc mouse coordinates using mouse event and canvas location info
  mousex = Math.round(event.clientX - cnvRect.left);
  mousey = Math.round(event.clientY - cnvRect.top);
}

function keydownHandler(event) {
  console.log(event.keyCode);

  if (event.keyCode === 39) {
    rightKeyPressed = true;
  } else if (event.keyCode === 37) {
    leftKeyPressed = true;
  } else if (event.keyCode === 40) {
    upKeyPressed = true;
  } else if (event.keyCode === 38) {
    downKeyPressed = true;
  }
}

function keyupHandler(event) {
  if (event.keyCode === 39) {
    rightKeyPressed = false;
  } else if (event.keyCode === 37) {
    leftKeyPressed = false;
  } else if (event.keyCode === 40) {
    upKeyPressed = false;
  } else if (event.keyCode === 38) {
    downKeyPressed = false;
  }
}