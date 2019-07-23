//Factory Function 
function createCircle(radius) {
    return {
        radius,
        Area : function() {
            console.log('Area');
        }
    };
}

let C = createCircle(4);
C.Area();

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.Area = function() {
        console.log('Area');
    }
}

let S = new Circle(3);
S.Area();