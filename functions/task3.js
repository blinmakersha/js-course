function arrSort(array) {
	for (let i = 0; i < array.length; i++) {
		for (let el = 0; el < array.length - 1; el++) {
			if (array[el] > array[el + 1]) {
				let temp = array[el]
				array[el] = array[el + 1]
				array[el + 1] = temp
			}
		}
	}
	return array
}

console.log(arrSort([2, 5, 1, 3, 4]))

// func for sorting numbers in an array
