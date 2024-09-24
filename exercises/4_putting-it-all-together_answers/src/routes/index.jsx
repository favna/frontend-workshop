import './index.css';

import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { itemData } from '../data/items';

export const Route = createFileRoute('/')({
	component: Home
});

function Home() {
	let navigate = useNavigate();

	function handleNavigate(id) {
		navigate({ to: '/items/$itemId', params: { itemId: id } });
	}

	return (
		<div className="home-card-container">
			{itemData.map((item) => (
				<div className="home-card" key={item.id}>
					<h1 className="home-header">{item.name}</h1>
					<img onClick={() => handleNavigate(item.id)} className="image" src={item.image} alt={`depicts ${item.name}`} />
					<p>${item.price}</p>
				</div>
			))}
		</div>
	);
}
