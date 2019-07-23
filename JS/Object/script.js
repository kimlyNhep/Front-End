var Person = {
    firstname : "kimly",
    lastname : "Nhep",
    age : 21,
    add : function(a,b) {
        return a + b;
    }
};
document.getElementById("text").innerHTML = Person["firstname"];