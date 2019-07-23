var numbers = [12,56,34,78,27,38];
//ascending order
console.log(numbers.sort(function(a,b) {
    return a - b;
}));
//descending order
console.log(numbers.sort(function(a,b) {
    return b - a;
})); 