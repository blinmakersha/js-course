function countExtra(a, b, n, resA, resB) {
	let newA = Math.floor((a % 1) * 10 ** n)
	let newB = Math.floor((b % 1) * 10 ** n)
	console.log(newA === resA)
	console.log(newB === resB)
}

countExtra(13.123456789, 2.123, 5, 12345, 12300)
countExtra(13.890123, 2.891564, 2, 89, 89)
countExtra(13.890123, 2.891564, 3, 890, 891)

// func for counting extra zeros in the decimal part of a number when it is divided by another one
