import { useState } from 'react';

export default function App() {
	const [canDrink, setCanDrink] = useState(false);

	/** @param {KeyboardEvent} event The HTML event fired when a keypress goes up */
	function handleKeyUp(event) {
		const currentAge = event.target.valueAsNumber;

		let newCanDrink = false;
		if (!isNaN(currentAge) && currentAge >= 18) {
			newCanDrink = true;
		}

		setCanDrink(newCanDrink);
	}

	return (
		<html lang="en">
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Are you allowed to drink?</title>
			</head>
			<body>
				<div>
					Are you allowed to drink? <span>{canDrink ? 'Yes' : 'No'}</span>
				</div>

				<form>
					<label for="age">What is your age?</label>
					<input type="number" onKeyUp={handleKeyUp} />
				</form>
			</body>
		</html>
	);
}
