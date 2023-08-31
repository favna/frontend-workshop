'use client';

import '@/styles/styles.css';
import { useState } from 'react';

export default function State() {
	const [isChecked, setIsChecked] = useState(false);

	return (
		<section>
			<form>
				<label htmlFor="checkbox">Click me!</label>
				<input id="checkbox" type="checkbox" checked={isChecked} onChange={(event) => setIsChecked(event.target.checked)} />
			</form>
		</section>
	);
}
