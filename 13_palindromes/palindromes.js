

const palindromes = function (str) {

      const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

      const cleanedString = str.toLowerCase().split('').filter((char) => alphanumerical.includes(char)).join('');


return cleanedString.split('').reverse().join('') === cleanedString
};

console.log(palindromes('racecar!'))
 
// Do not edit below this line
module.exports = palindromes;
