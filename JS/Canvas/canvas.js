var canvas = document.querySelector("canvas");
canvas.width = innerWidth; // set canvas width for full screen
canvas.height = innerHeight; // set canvas height for full screen

var pen = canvas.getContext("2d");
function DrawRect() {
  //Drawing Reactangle
  pen.fillRect(100, 100, 100, 100);
}
function DrawLine() {
  //Drawing The Line
  pen.beginPath();
  pen.moveTo(50, 300);
  pen.lineTo(200, 300);
  pen.strokeStyle = "#fa34a3";
  pen.stroke();
}
function DrawCircle() {
  //Drawing Arc or Circle
  pen.arc(300, 300, 30, 0, 2 * Math.PI, false);
  pen.stroke();
}
function RandomCircle() {
  var balls = [];
  //Drawing some random Circle
  for (var i = 0; i < 50; i++) {
    ball = {
      r: 30,
      x: Math.random() * (innerWidth - 60) + 30,
      y: Math.random() * (innerHeight - 60) + 30,
      dx: Math.random() - 0.5,
      dy: Math.random() - 0.5,
      Draw: function() {
        pen.beginPath();
        pen.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
        pen.strokeStyle = "blue";
        pen.stroke();
      }
    };
    balls.push(ball);
  }
  return balls;
}

var balls = RandomCircle();
function ballMovement() {
  requestAnimationFrame(ballMovement);
  pen.clearRect(0, 0, innerWidth, innerHeight);
  balls.forEach(ball => {
    ball.Draw();
    if (ball.x + ball.r > innerWidth || ball.x - ball.r < 0) {
      ball.dx = -ball.dx;
    }
    if (ball.y + ball.r > innerHeight || ball.y - ball.r < 0) {
      ball.dy = -ball.dy;
    }
    ball.x += ball.dx;
    ball.y += ball.dy;
    console.log(ball.x, ball.y);
  });
}

ballMovement();
