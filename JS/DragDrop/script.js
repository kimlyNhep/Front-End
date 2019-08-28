var wrap = document.getElementById("wrap");
var number = 1;
var random = generateNumber();
var components = [];
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
  div.setAttribute("class", "components");
  div.classList.add("color");
  div.setAttribute("draggable", "true");
  div.setAttribute("id", number);
  if (text == "16") {
    text = "";
    div.classList.remove("color");
    div.classList.add("nocolor");
  }
  var text = document.createTextNode(text);
  div.appendChild(text);
  components.push({
    class: div.className,
    draggable: div.draggable,
    id: div.id,
    Text: div.innerText
  });
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
var DragSrcEle = null;
var DesId = "";
var isDifference = false;
var isEmpty = false;
//Drag Start
function handleDragStart(e) {
  var Node;
  components.forEach(node => {
    if (node.id == e.target.id) {
      Node = node;
    }
  });
  if (Node.class.substr(Node.class.indexOf(" "), 8) != "nocolor") {
    DragSrcEle = this;
    e.dataTransfer.effectAlled = "move";
    e.dataTransfer.setData("SrcId", e.target.id);
    console.log(Node.class.substr(Node.class.indexOf(" "), 8));
  } else isEmpty = true;
}
//Drag Over
function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }
  e.dataTransfer.dropEffect = "move";
  return false;
}
//Drag Enter
function handleDragEnter(e) {
  this.classList.add("over");
}
//Drag Leave
function handleDragLeave(e) {
  this.classList.remove("over"); //e.target is previous element
}
//Drag End
function handleDragEnd(e) {
  //e.target is the source node
  [].forEach.call(cols, function(col) {
    col.classList.remove("over");
  });
  if (isDifference && !isEmpty) {
    for (var i = e.target.attributes.length - 1; i >= 0; i--) {
      e.target.removeAttribute(e.target.attributes[i].name);
    }
    components.forEach(node => {
      if (node.id == DesId) {
        e.target.setAttribute("class", node.class);
        e.target.setAttribute("draggable", node.draggable);
        e.target.setAttribute("id", node.id);
        e.target.innerHTML = node.Text;
      }
    });
  }
}
//Drop
function handleDrop(e) {
  if (e.stopPropagation()) {
    e.stopPropagation(); //stop the broswer from redirecting
  }
  //Don't do anything if dropping the same column we're dragging
  if (DragSrcEle != this && !isEmpty) {
    isDifference = true;
    //Store Destrination Element
    DesId = e.target.id;
    //Set the source column's HTML to the HTML of the column we dropped on.
    var SrcId = e.dataTransfer.getData("SrcId");
    for (var i = e.target.attributes.length - 1; i >= 0; i--) {
      e.target.removeAttribute(e.target.attributes[i].name);
    }
    components.forEach(node => {
      if (node.id == SrcId) {
        e.target.setAttribute("class", node.class);
        e.target.setAttribute("draggable", node.draggable);
        e.target.setAttribute("id", node.id);
        e.target.innerHTML = node.Text;
      }
    });
  } else isDifference = false;
  //See the section on the DataTransfer object
  return false;
}
var cols = document.querySelectorAll(".components");
[].forEach.call(cols, function(col) {
  col.addEventListener("dragstart", handleDragStart, false);
  col.addEventListener("dragover", handleDragOver, false);
  col.addEventListener("dragenter", handleDragEnter, false);
  col.addEventListener("dragleave", handleDragLeave, false);
  col.addEventListener("dragend", handleDragEnd, false);
  col.addEventListener("drop", handleDrop, false);
});
