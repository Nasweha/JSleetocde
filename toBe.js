

//Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

//toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
//notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

//object with in function

var expect = function(val){
    // obj = {
    //     toBe(val1){
    //         if(val===val1)
    //             return true
    //         else throw new error("not equal")


    //     },
    //     notToBe(val1){
    //         if(val1===val)
    //             return true
    //         else throw new error("not equal")

    //     }
    // }
    // return obj

    function toBe(n){
        if(val===n){
            return true
        }
        else{
            throw new Error("Not Eqaul")
        }
    }

    function notToBe(n){
        if(val!==n){
            return true
        }
        else{
            throw new Error("Eqaul")
        }
    }
    return{
        toBe,notToBe
    }
}