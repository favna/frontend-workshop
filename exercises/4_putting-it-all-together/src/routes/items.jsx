import { useParams } from 'react-router-dom';
import { itemData } from '../data/items';
import './item.css';

export default function Items() {
	const params = useParams();

	/** @type { { id: number; name: string; price: string; image: string; description: string; } } */
	const item = itemData.find((item) => item.id === Number(params.itemId));

	return <div></div>;
}
