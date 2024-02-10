let objects = [
  { name: "Tom", surname: "James" },
  { name: "Tony", surname: "Stark" },
  { name: "Tim", surname: "Berton" },
];

function filter(arr, prop, value) {
  let res = [];
  for (let el of arr) {
    if (el[prop] == value) {
      res.push(el);
    }
  }
  return res;
}

let result = filter(objects, "name", "Tom");
console.log(result);

// func of filtering by properties
