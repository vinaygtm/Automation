//factory function is used to create multiple objects of same type
function createCircle(radius){
    const circle ={
        radius: radius,
        draw(){
            console.log('draw');
        }
    }
    return circle;
}

const c1= createCircle(1) ;
console.log(c1);
const c2= createCircle(5) ;
console.log(c2);
const c3= createCircle(11) ;
console.log(c3);