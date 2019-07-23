function customForEach(arr,callback) {
    for(var i = 0; i < arr.length; i++) {
            callback();
    }
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

customForEach(numbers,function() {
    console.log("Hello")
});

Array.prototype.customForEach = function(callback) {
    for(var i = 0; i < this.length; i++) {
        callback();
    }
}

numbers.customForEach(function() {
    console.log("Array prototype");
});