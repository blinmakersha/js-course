function createStudentCard(name, age) {
  let card = document.createElement("div");
  let studentName = document.createElement("h2");
  let studentAge = document.createElement("span");
  let ageStr = "Возраст: " + age + " лет";

  studentName.textContent = name;
  studentAge.textContent = ageStr;

  card.append(studentName, studentAge);
  document.body.append(card);
}

createStudentCard("Игорь", 17);
