import './item.css';

import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import { itemData } from '../../data/items';

export const Route = createFileRoute('/items/$itemId')({
	loader: ({ params }) => itemData.find((item) => item.id === Number(params.itemId)),
	component: Item
});

function Item() {
	const item = useLoaderData({});

	return (
		<div>
			<div className="item-card" key={item.id}>
				<h1 className="item-header">{item.name}</h1>
				<p>{item.description}</p>
				<p>${item.price}</p>
				<img className="item-image" src={item.image} alt={`depicts ${item.name}`} />
			</div>
		</div>
	);
}
