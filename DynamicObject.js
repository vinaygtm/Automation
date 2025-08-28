const circle ={
    radius: 1,
    color: 'red',
    log(){
    }
}
console.log(circle);

circle.prices = 100;

circle.draw = function(){

}

circle.log(circle); //this will call the log method of circle object

circle.radius = 2;
circle.log(circle); 
circle.radius = 3;
circle.log(circle);

console.log(circle); //this will call the log method of circle object
delete circle.prices; //delete
console.log(circle); //this will call the log method of circle object
delete circle.draw; //delete
console.log(circle); //this will call the log method of circle object