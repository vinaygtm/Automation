//Enumerting properties of an object
//Get all properties of an object 

const circle ={
    radius :1,
    draw(){
        console.log('draw');
        }
    };

    //1. for -in loop:
    for(let key in circle)
        console.log(key, circle[key]);

    console.log('-------------------');
    
//2. for -of loop:
for(let key of Object.keys( circle ))
    console.log(key, circle[key]);
console.log('-------------------');