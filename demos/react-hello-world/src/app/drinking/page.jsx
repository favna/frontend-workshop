'use client';

import '@/styles/styles.css';
import { useState } from 'react';

export default function CanDrink() {
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
		<section>
			<div>
				Are you allowed to drink? <span>{canDrink ? 'Yes' : 'No'}</span>
			</div>

			<form>
				<label htmlFor="age">What is your age?</label>
				<input id="age" type="number" onKeyUp={handleKeyUp} />
			</form>
		</section>
	);
}
