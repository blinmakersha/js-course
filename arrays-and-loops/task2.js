function createListOfNums(count) {
	let res = []
	for (let i = 1; i <= count; ++i) {
		res.push(i)
	}
	return res
}

function mixListOfNums(count) {
	let list = createListOfNums(count)
	for (let i = 0; i < list.length - 1; ++i) {
		let j = Math.round(0 + Math.random() * (list.length - 1 - 0))
		;[list[i], list[j]] = [list[j], list[i]]
	}

	console.log(list)
}

mixListOfNums(3)

// func of mixing array items
