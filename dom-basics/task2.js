function createStudentCard(student) {
  let card = document.createElement("div");
  let studentName = document.createElement("h2");
  let studentAge = document.createElement("span");
  let ageStr = "Возраст: " + student.age + " лет";

  studentName.textContent = student.name;
  studentAge.textContent = ageStr;

  card.append(studentName, studentAge);
  document.body.append(card);
}

let studentObj = {
  name: "Игорь",
  age: 17,
};

createStudentCard(studentObj);
