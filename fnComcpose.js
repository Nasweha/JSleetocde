


//in a given array of functions [f1,f2,f3......fn],return a new function fn is the function composition of that array of functions 

//[f(x),g(x),h(x)]  //fn(x) = f(g(h(x)))



function add(a, b) {
    return a + b
}

function mult(val) {
    return val * 2

}
function square(val) {
    return val * val

}

//writing as a general function

// function addsquare(a, b) {
//     return square(add(a, b))
// }
// console.log(addsquare(2, 2));



//console.log(mult(2));

//console.log(add(2,3));

//console.log(square(add(2,3)));


function compose(f1, f2) {

    return function (a, b) {
        return f2(f1(a, b))
    }
}

//another way as arrow function 

const fcompose = (f1,f2)=>(a,b)=>f2(f1(a,b))

const result = compose(add,mult)
console.log(result(2,3));


//inifnite composition 

function composeAl(...funcs){
    return function(...values){
        return funcs.reduce((val,fn)=>fn(val),values)


    }
}



//You may assume each function in the array accepts one integer as input and returns one integer as output.

var compose = function(functions) {
    n= functions.length;
    return function(x) {
        if(n==0){
            return x

        }
        else{
            result = x
            for(let i = n;i>=0;i--){
                result = functions[i](result)
            }
            return result

        }
        
        

      
        
    }
};