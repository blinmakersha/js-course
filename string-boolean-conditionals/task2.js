function convertRegister(userName, userSurname) {
	let firstFromName = userName.substring(0, 1).toUpperCase()
	let firstFromSurname = userSurname.substring(0, 1).toUpperCase()
	let lastFromName = userName.substring(1).toLowerCase()
	let lastFromSurname = userSurname.substring(1).toLowerCase()

	if (
		userName.substring(0, 1) === firstFromName &&
		userName.substring(1) === lastFromName
	) {
		console.log('The name remains unchanged')
		console.log(userName)
	} else {
		console.log('The name has been converted')
		console.log(firstFromName + lastFromName)
	}

	if (
		userSurname.substring(0, 1) === firstFromSurname &&
		userSurname.substring(1) === lastFromSurname
	) {
		console.log('The surname remains unchanged')
		console.log(userSurname)
	} else {
		console.log('The surname has been converted')
		console.log(firstFromSurname + lastFromSurname)
	}
}

convertRegister('john', 'doe')

// func for changing the case of letters in a string
