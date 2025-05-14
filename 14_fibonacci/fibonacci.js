const fibonacci = function(number) {

    let count ;

    if(typeof number !== 'number'){
        count = parseInt(number)
    }
    else{
        count = number
    }

    if(count < 0 ) return "OOPS";
    if(count == 0) return 0

    let first  = 1;
    let second = 0;
    for(let i = 2; i<=number; i++){
        let thirdTerm = first + second;
        second = first;
        first = thirdTerm
    }
    return first
};

// Do not edit below this line
module.exports = fibonacci;
