const people = [
      {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
    ]


    function findTheOldest(people){
        let oldest = people[0];
        for(let i = 0; i < people.length; i++){
            if((people[i].yearOfDeath - people[i].yearOfBirth) > (oldest.yearOfDeath - oldest.yearOfBirth)){
                oldest = people[i]
            }
        }
        return oldest.name
    }

    console.log(findTheOldest(people))