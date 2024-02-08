function randomNums(n, m) {
	let min = Math.min(n, m)
	let max = Math.max(n, m)
	return Math.round(min + Math.random() * (max - min))
}

function randomiser(n, m, count) {
	let res = []
	for (let i = 0; i < count; i++) {
		res.push(randomNums(n, m))
	}
	console.log(res)
}

randomiser(2, 5, 50)

// func of creating  a new array with random numbers from the given condition
