function getAge(birthDate) {
	let curDate = new Date()
	let curYear = curDate.getFullYear()
	return curYear - birthDate
}

console.log(getAge(2002))

// func that receives the user's year of birth and returns user's age
