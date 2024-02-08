function createListOfNums(count) {
	let res = []
	for (let i = 1; i <= count; ++i) {
		res.push(i)
	}
	return res
}

function findIndByEl(n) {
	let list = createListOfNums(10)
	let i = 0
	if (n < list.length + 1) {
		while (list[i] !== n) {
			i += 1
			continue
		}
		console.log(i)
	} else {
		console.log("element isn't in the list")
	}
}

findIndByEl(10)

// func for finding index by element in an array
