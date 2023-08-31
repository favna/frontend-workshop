'use client';

import '@/styles/styles.css';
import { useRef } from 'react';

export default function Ref() {
	const el = useRef(null);

	function log() {
		if (el.current) {
			alert(el.current.innerText);
		}
	}

	return (
		<>
			<h1 ref={el}>Element with a ref</h1>
			<button onClick={log}>Click me to get an alert!</button>
		</>
	);
}
