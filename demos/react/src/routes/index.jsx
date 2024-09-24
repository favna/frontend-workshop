import './index.css';

import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home
});

function Home() {
	return (
		<div className="center">
			<p className="description">Hello World!</p>
		</div>
	);
}
