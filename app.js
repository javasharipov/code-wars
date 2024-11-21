{
	// requirement is to find the smallest number
	function findSmallestInt(arr) {
		return Math.min(...arr)
	}

	console.log(findSmallestInt([56, 2, 5, 8, 20]))
}

{
	// requitement is to converting string to number
	const stringToNumber = function (str) {
		return Number(str)
	}
	console.log(stringToNumber('1234'))
}

{
	// requirement is to find sum sum of the number
	var summation = function (num) {
		return (num * (num + 1)) / 2
	}
	console.log(summation(2))
}

{
	// requirement is to find the all the trues
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
	// requirement is to find the smallest number and the biggest number
	function highAndLow(numbers) {
		const nums = numbers.split(' ').map(Number)
		return `${Math.max(...nums)} ${Math.min(...nums)}`
	}

	console.log(highAndLow('1 2 -3 4 5'))
	console.log(highAndLow('1 9 3 4 -5'))
}

{
	// requirement is to find max and min number
	function highAndLow(numbers) {
		numbers = numbers.split(' ')
		return Math.max(...numbers) + ' ' + Math.min(...numbers)
	}

	console.log(highAndLow('1 2 3 4 5'))
}

{
	// requirement is to remove the gaps between the string
	function noSpace(x) {
		return x.replace(/\s+/g, '')
	}

	console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
}

{
	// requirement is to make a greeting function
	function greet(name) {
		return `Hello, ${name} how are you doing today?`
		name
	}

	console.log(greet('John'))
}
