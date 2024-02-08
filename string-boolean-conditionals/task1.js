function checkPass(password) {
	if (
		password.length >= 4 &&
		(password.includes('-') || password.includes('_'))
	) {
		console.log('Great password')
	} else {
		console.log('Bad password')
	}
}

// safety password
checkPass('1234-')
checkPass('4321_')
checkPass('qaz-xsw')
checkPass('_zxd')

// bad password
checkPass('_-a')
checkPass('qaz')
checkPass('_-3')
checkPass('123456789')

// func for password security check
