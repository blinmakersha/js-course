function randomNums(n, m) {
	let min = Math.min(n, m)
	let max = Math.max(n, m)
	let res = Math.round(min + Math.random() * (max - min))
	let res2 = Math.round(min + Math.random() * (max - min))
	console.log(`1.`, res, Math.abs(min) <= res <= Math.abs(max))
	console.log(`2.`, res2, Math.abs(min) <= res <= Math.abs(max))
	console.log()
}

for (let i = 0; i < 100; i++) {
	randomNums(-2, 2)
}

// func for generating a string of n random numbers
