import './item.css';

import { createFileRoute, useLoaderData } from '@tanstack/react-router';
import { itemData } from '../../data/items';

export const Route = createFileRoute('/items/$itemId')({
	loader: ({ params }) => itemData.find((item) => item.id === Number(params.itemId)),
	component: Item
});

function Item() {
	const item = useLoaderData({});

	return <div></div>;
}
