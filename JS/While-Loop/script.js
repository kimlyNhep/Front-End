console.log("1.Print all numbers between -10 and 19");

var number = -10;
while(number > -11 && number < 20) {
    console.log(number);
    number++;
}

console.log("2.Print all even numbers between 10 and 40");

number = 10;
while(number > 9 && number < 41) {
    if((number % 2) === 0) {
        console.log(number);
    }
    number++;
}

console.log("3.Print all odd numbers between 300 and 333");

number = 300;
while(number > 299 && number < 334) {
    if((number % 2) === 1) {
        console.log(number);
    }
    number++;
}

console.log("4.Print all numbers divisible by 5 and 3 between 5 and 50");
number = 5;
while(number > 4 && number < 51) {
    if(((number % 5) === 0) && ((number % 3) === 0)) {
        console.log(number);
    }
    number++;
}