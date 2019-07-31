var btn = document.querySelector("button");
var text = document.querySelector(".text");
btn.addEventListener("click", function() {
  text.textContent = "Someone has clicked on the button";
});
