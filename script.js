const array = [1,2,10,16]
const reduceArray = array.reduce((acc,num) =>{
    return  acc+num
},1)
console.log(reduceArray)