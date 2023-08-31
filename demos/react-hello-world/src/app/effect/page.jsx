'use client';

import '@/styles/styles.css';
import { useState, useEffect } from 'react';

export default function Effect() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	});

	return <h1>I have rendered {count} times!</h1>;
}
