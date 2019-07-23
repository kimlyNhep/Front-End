var secretNumber = 7;

var guess = prompt("Guess a number");

if(Number(guess) === secretNumber) {
    alert("You GOT IT RIGHT!");
}
else if(Number(guess) > secretNumber) {
    alert("Too high, Guess again");
}
else {
    alert("Too low, Guess again");
}