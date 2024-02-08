function countArea(x1, y1, x2, y2) {
	let side = Math.abs(x1 - x2)
	let side2 = Math.abs(y1 - y2)
	console.log(side * side2)
}

countArea(2, 3, 10, 5)
countArea(10, 5, 2, 3)
countArea(-5, 8, 10, 5)
countArea(5, 8, 5, 5)
countArea(8, 1, 5, 1)

// func for counting the area of the rectangle if it is valid
