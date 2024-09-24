import './index.css';

import { createFileRoute, useNavigate } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home
});

function Home() {
	let navigate = useNavigate();

	function handleNavigate(id) {
		navigate({ to: '/items/$itemId', params: { itemId: id }});
	}

	return <div className="home-card-container"></div>;
}
