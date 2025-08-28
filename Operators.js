// Arithmetic operations
let     x =10;
let y = 20;
let z = 30;
console.log(x + y);
if (x > y){
    console.log('x is greater than y');
}
else{
    console.log('y is greater than x');
}

//switch case
let day = 2;
switch(day){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    default:
        console.log('Invalid day');
        break;
}

/for loop/

for(let i=0; i<=10; i++){
    console.log(i);
}

//while loop
let j = 6;

while(j<=5){
    console.log(j);
    j++;
}

console.log('-------------------');

//for in loop
const persons ={
    name: 'John',
    age: 30,
}
for (let key in persons){
    console.log(key, persons[key]);
}

//Array
const fruits = ['apple', 'banana', 'orange'];
for (let key in fruits){
    console.log(key, fruits[key]);
}

//for -of loop used to get values from array

for (let fruit of fruits){
    console.log(fruit);
}

//break and continue statements
for(let i=0; i<=10; i++){
    if(i===5){
        break;
    }
    console.log(i);
}  

