function createStudentCard({ name, age }) {
  let card = document.createElement("li");
  let studentName = document.createElement("h2");
  let studentAge = document.createElement("span");
  let ageStr = "Возраст: " + age + " лет";

  studentName.textContent = name;
  studentAge.textContent = ageStr;

  card.append(studentName, studentAge);
  document.body.append(card);
}

function createStudentsList(listArr) {
  let cards = document.createElement("ul");

  for (let student of listArr) {
    let card = createStudentCard(student);
    cards.append(card);
  }
}

let allStudents = [
  { name: "Валя", age: 11 },
  { name: "Таня", age: 24 },
  { name: "Рома", age: 21 },
  { name: "Надя", age: 34 },
  { name: "Антон", age: 7 },
];

createStudentsList(allStudents);
