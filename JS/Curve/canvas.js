var canvas = document.getElementById("canvas");
canvas.width = innerWidth - 50;
canvas.height = innerHeight - 50;
var pen = canvas.getContext("2d");

function getForm() {
  form = document.formInput;
  a = form.A.value;
  b = form.B.value;
  c = form.C.value;
  return (Equaltion = {
    a,
    b,
    c
  });
}
function Calculate() {
  Equaltion = getForm();
  DrawCurve(Equaltion.a, Equaltion.b, Equaltion.c);
}
function DrawCoordinator() {
  pen.beginPath();
  pen.moveTo(0, innerHeight / 2);
  pen.lineTo(innerWidth - 50, innerHeight / 2);
  pen.moveTo((innerWidth - 100) / 2, 0);
  pen.lineTo((innerWidth - 100) / 2, innerHeight - 50);
  pen.stroke();

  for (var i = 0; i < 5; i++) {
    pen.beginPath();
    pen.arc(100 * i, 200, 30, 0, 2 * Math.PI, false);
    pen.stroke();
  }
}
function DrawCurve(a, b, c) {
  for (var x = 1; x < 100; x++) {
    y = a * x * x + b * x + c;
    console.log(y);
    pen.fillRect(x, y, 1, 1);
  }
}
