import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';

export const Route = createFileRoute('/state')({
	component: State
});

function State() {
	const [text, setText] = useState('Text is empty');

	/** @param {import('react').ChangeEvent} event The HTML event fired when a keypress goes up */
	function handleChange(event) {
		const value = event.target.value;
		if (value.length > 5) {
			setText('Text longer than 5 characters');
		} else if (value.length === 0) {
			setText('Text is empty');
		} else {
			setText('Text is shorter than 5 characters');
		}
	}

	return (
		<div>
			<label htmlFor="label">Insert text</label>
			<input id="input" type="text" onChange={handleChange} />
			<p style={{ marginTop: '1rem' }}>{text}</p>
		</div>
	);
}
