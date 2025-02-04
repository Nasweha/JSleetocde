

// const arr = [1,2,3]
// const newArray =[]
// const fn = function (){
//     for(let i=0;i<arr.length;i++){
//         newArray.push(arr[i]+1)
//     }
// }
// console.log(fn());


//  const array = [2,3,4,5]

// const fun= function()
// {
//     for( let i=0;i<array.length;i++){
//       const  NweArray = array.map(num=>num+1)
//         return NweArray
      

//     }
// }
// console.log(fun());

// const array = [1,2,3,4]
// const map = function (arr, fn){
//     const result = []
//     n=arr.length
//     for(i=0;i<n;i++){
//      result[i] = fn(arr[i],i)
    
      
//     }
//     return(result);
// }


const map = function(arr,fn){
    const result = []
    for(let i=0;i<arr.length;i++){
        result[i] = fn(arr[i],[i])
    }
    return result

}







