//data types
let name = 'Vinay Gupta';
let age = 35;
let color = 'red';
console.log(name);
console.log(age);

const range = 4;
//range =5;
console.log(range);
const numbOfDays = [1,2,3,4,5,6,7];
console.log(numbOfDays);
let flag = true;
letisActive = false;
let price = null;
let wheels = undefined;
console.log(flag);
let model;

//dynamic typing
let d = 10;

d = "Hello";

console.log(typeof d);

d = true;

console.log(typeof d);
//objects:
let user = {
    name: 'John Doe',
    age: 30,
    isActive: true
};
console.log(user);

//. Notation: This will throw an error
console.log(user.name);
console.log(user.age);
console.log(user.isActive);user.hobbies = ['reading', 'painting'];
user.address = {
    street: '123 Main St',
    city: 'New York',
    state: 'NY'
};
//2. using square brackets
console.log(user['name']);
//3. using backet notation
console.log(user['hobbies']);

//arrays: List of objects
let languages = [];
languages = ['Java', 'JavaScript', 'Python', 'Ruby'];
console.log(languages);
languages.push('Go');
languages[2] = 'C++';
console.log(languages);
let colors = ['red', 'green', 'blue'];

//functions
function greet(name, age){
    console.log('Hello ' + name+ 'Age:' +age );
}

// call the function
greet('John', 35);

// return from function:
function sum(a, b){
    return a + b;
}   

let result = sum(188000, 20);
console.log(result);
console.log(sum(10, 20));

function multiply(a, b){
    return a * b;
}

console.log(multiply(10, 20));
console.log(multiply(109, 30));