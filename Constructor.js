// used to create an objects
// Pascal notation is used for naming objects and classes: OneTwoThree

function Circle(radius){

    this.radius = radius;
    this.draw = function(){
        console.log('draw', radius);
    }
}

//how to call the constructor: by using new kew keyword
const Circle1 = new Circle(1);
console.log(Circle1);
console.log(Circle1.radius);
console.log(Circle1.draw());