function filter(whiteList, blackList) {
	let resultArr = []

	for (let el of whiteList) {
		if (!blackList.includes(el)) {
			resultArr.push(el)
		}
	}
	return resultArr
}

let whiteList = [
	'my-email@gmail.ru',
	'jsfunc@mail.ru',
	'annavkmail@vk.ru',
	'fullname@skill.ru',
	'goodday@day.ru',
]
let blackList = ['jsfunc@mail.ru', 'goodday@day.ru']

console.log(filter(whiteList, blackList))

// func clears emails that are in the black list and returns a white list with filtered emails
