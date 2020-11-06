//generates a random number function that falls between min/max params
const generateRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

//declare numbers based on specific params
let n1 = generateRandomNumber(6, 10);
let n2 = generateRandomNumber(1, 5);

//output declared values
num1.value = n1;
num2.value = n2;

//get and output answer
let ans = n1 - n2;
answer.textContent = ans;

const jsGame = () => {
	let userA = answer.value;

	if (userA == ans) {
		result.textContent = `Correct`;
	} else {
		result.textContent = `Incorrect. The correct answer is ${ans}`;
	}

	answer.value = "";
	let n1 = generateRandomNumber(6, 10);
	let n2 = generateRandomNumber(1, 5);

	//resets the quiz question
	num1.value = n1;
	num2.value = n2;

	ans = n1 - n2;
};
