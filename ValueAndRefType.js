//Value Tupes:
// number, string, boolean, symbol, undefined, null

//Reference Type:
//Object, Function, Array
// Objects are copied by reference, not by value

let x =10;
y =x;
x =20;

console.log(x);
console.log(y);

let p = {Value: 30};
let q = p;
p.Value = 40;
console.log(p.Value);
console.log(q.Value);