var fruits = ["apple","banana","orange","Mango"]; // good
var cars = new Array("BWM","Audi","porch"); // bad
console.log(fruits);
var person = ["kimly","nhep",21]; // Array are object
var text = "<ul>";
for(var i = 0; i < fruits.length; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text+= "</ul>";
document.getElementById("fruit").innerHTML = text; //add text to div