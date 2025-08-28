//vars and functions should be defined in Object
//Key: Value pair format

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function(){
        console.log('draw');
    }
};

console.log(circle);console.log(circle.radius);
console.log(circle.location);
console.log(circle.draw()); 
console.log(circle); //this will throw an error as area is not defined in the circle object); //this will throw an error as area is not defined in the circle object