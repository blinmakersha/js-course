function combineLists(arr1, arr2) {
	let res = []
	let lengthArr1 = arr1.length
	let allLength = lengthArr1 + arr2.length
	for (let i = 0; i < allLength; ++i) {
		if (i < lengthArr1) {
			res.push(arr1[i])
		} else {
			res.push(arr2[i - lengthArr1])
		}
	}

	console.log(res)
}

combineLists([2, 2, 17, 21, 45, 12, 54, 31, 53], [12, 44, 23, 5])

// func for combining two arrays into one array with elements from both arrays
