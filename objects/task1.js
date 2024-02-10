let user1 = {
  name: "Jessica",
  age: 17,
};

let user2 = {
  name: "Tom",
  age: 21,
};

function getOlderUser(userOne, userTwo) {
  if (userOne.age > userTwo.age) return userOne.name;
  else return userTwo.name;
}

let result = getOlderUser(user1, user2);
console.log("The oldest user:", result);

let allUsers = [
  {
    name: "Albert",
    age: 11,
  },
  {
    name: "Tony",
    age: 24,
  },
  {
    name: "Sam",
    age: 21,
  },
  {
    name: "Jerry",
    age: 34,
  },
  {
    name: "Paulina",
    age: 7,
  },
];

function getOlderUserArray(usersArray) {
  let name = "";
  let maxAge = 0;
  for (let el of usersArray) {
    if (el.age > maxAge) {
      name = el.name;
      maxAge = el.age;
    }
  }
  return name;
}

let result2 = getOlderUserArray(allUsers);
console.log("The oldest user:", result2);

// func that is used to find the oldest user in the list
