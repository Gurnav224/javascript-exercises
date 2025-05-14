const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

const findTheOldest = function (people) {
  let oldest = people[0];
  for (let i = 1; i < people.length; i++) {
    const currentAge = getAge(people[i].yearOfBirth, people[i].yearOfDeath);
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);

    if (currentAge > oldestAge) {
      oldest = people[i];
    }
  }
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
