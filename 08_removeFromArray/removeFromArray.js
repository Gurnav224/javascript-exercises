const removeFromArray = function(arr,...args) {
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
      if(!args.includes(arr[i])){
        newArr.push(arr[i])
      }
    }
    return newArr
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2))

// Do not edit below this line
module.exports = removeFromArray;
