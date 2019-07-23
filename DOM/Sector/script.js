var apple = document.getElementById("apple");
console.log(apple);

apple.style.color = "red";

var button = document.querySelector("button");

button.addEventListener("click",function() {
    document.body.classList.toggle("purple");
});
