'use client';

import '@/styles/styles.css';

export default function PageWithLists() {
	const someList = ['one', 'two', 'three'];

	return (
		<div>
			{someList.map((item, index) => (
				<div key={index}>{item}</div>
			))}
		</div>
	);
}
