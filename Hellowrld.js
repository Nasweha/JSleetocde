
//normal function
// function f(a,b){
//     const sum = a+b
//     return sum
// }
// console.log(f(3,4));

//anonymous function

const f = function(a,b){
  let  sum = a+b
    return sum
    
}
console.log(f(3,4));


//arrow function

let sum =  (a,b)=>{
   sum = a+b
    return sum
    
}

console.log(sum(1,2));



//function within function

function fun(){
    function f(a,b){
        const sum = a+b
        return sum
    }
    return f
}

let nesfunction = fun()
console.log(nesfunction(2,9));




const createHelloWorld = function(){
    function f()
{
    return "Helloworld"
}
return f

}

const hello = createHelloWorld()
console.log(hello());


