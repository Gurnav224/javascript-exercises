const sumAll = function (starting, ending) {
  if (!Number.isInteger(starting)) return "ERROR";
  if (starting < 0 || ending < 0) return "ERROR";
  if (typeof starting !== "number" || typeof ending !== "number")
    return "ERROR";

  if (starting > ending) {
    let temp = starting;
    starting = ending;
    ending = temp;
  }

  let sum = 0;

  for (let i = starting; i <= ending; i++) {
    sum = sum + i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
