{
	function findSmallestInt(arr) {
		return Math.min(...arr)
	}

	console.log(findSmallestInt([56, 2, 5, 8, 20]))
}

{
	const stringToNumber = function (str) {
		return Number(str)
	}
	console.log(stringToNumber('1234'))
}

{
	var summation = function (num) {
		return (num * (num + 1)) / 2
	}
	console.log(summation(2))
}

{
	function countSheeps(sheep) {
		return sheep.filter(Boolean).length
	}

	const sheepArray = [
		true,
		true,
		true,
		false,
		true,
		true,
		true,
		true,
		true,
		false,
		true,
		false,
		true,
		false,
		false,
		true,
		true,
		true,
		true,
		true,
		false,
		false,
		true,
		true,
	]

	console.log(countSheeps(sheepArray))
}

{
	function highAndLow(numbers) {
		const nums = numbers.split(' ').map(Number)
		return `${Math.max(...nums)} ${Math.min(...nums)}`
	}

	console.log(highAndLow('1 2 -3 4 5'))
	console.log(highAndLow('1 9 3 4 -5'))
}

{
	function highAndLow(numbers) {
		numbers = numbers.split(' ')
		return Math.max(...numbers) + ' ' + Math.min(...numbers)
	}

	console.log(highAndLow('1 2 3 4 5'))
}

{
	function noSpace(x) {
		return x.replace(/\s+/g, '')
	}

	console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
}

{
	function greet(name) {
		return `Hello, ${name} how are you doing today?`
		name
	}

	console.log(greet('John'))
}
