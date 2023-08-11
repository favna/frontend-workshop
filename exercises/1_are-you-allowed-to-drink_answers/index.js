// Retrieve the input element and add an event listener to it
document.getElementById('age').addEventListener('keyup', handleKeyUp);

/** @param {KeyboardEvent} event The HTML event fired when a keypress goes up */
function handleKeyUp(event) {
	const currentAge = event.target.valueAsNumber;

	console.log(currentAge);
	let canDrink = false;
	if (!isNaN(currentAge) && currentAge >= 18) {
		canDrink = true;
	}

	const outputElement = document.getElementById('answer');
	outputElement.innerHTML = canDrink ? 'Yes' : 'No';
}
