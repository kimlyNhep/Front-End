var wrap = document.getElementById("wrap");
var number = 1;
var random = generateNumber();
function generateNumber() {
  var random = new Array();
  for (var i = 1; i <= 16; i++) {
    random[i - 1] = i;
    random.sort(function() {
      return Math.round(Math.random()) - 0.5;
    });
  }
  return random;
}
function CreateRow() {
  for (var i = 0; i < 4; i++) {
    CreateCell(random[number - 1]);
  }
}
function CreateCell(text) {
  var div = document.createElement("div");
  if (number === 5 || number === 9 || number === 13) div.style.clear = "left";
  div.setAttribute("class", "components");
  div.setAttribute("draggable", "true");
  var text = document.createTextNode(text);
  if (text == 16) div.appendChild("");
  else div.appendChild(text);
  wrap.appendChild(div);
  number++;
}
function CreateWrap() {
  for (var i = 0; i < 4; i++) {
    CreateRow();
  }
}
CreateWrap();

//Drag Drop
function handleDragStart(e) {
  this.style.opacity = "0.4"; // this / e.target is the source node.
}

var cols = document.querySelectorAll(".components");
[].forEach.call(cols, function(col) {
  col.addEventListener("dragstart", handleDragStart, false);
});
