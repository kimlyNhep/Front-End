console.log("1.Print all numbers between -10 and 19");
for(var numbers = -10;numbers <= 19;numbers++) {
    console.log(numbers);
}
console.log("2.Print all even numbers between 10 and 40");
for(var numbers = 10;numbers <= 40;numbers++) {
    if(numbers % 2 === 0) {
        console.log(numbers);
    }
}
console.log("3.Print all odd numbers between 300 and 333");
for(var numbers = 300; numbers <= 333; numbers++) {
    if(numbers % 2 === 1) {
        console.log(numbers);
    }
}
console.log("4.Print all numbers divisible by 5 and 3 between 5 and 50");
for(var numbers = 5;numbers <= 50; numbers++) {
    if(numbers % 5 === 0 && numbers % 3 === 0) {
        console.log(numbers);
    }
}