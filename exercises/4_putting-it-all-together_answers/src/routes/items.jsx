import { useParams } from 'react-router-dom';
import { itemData } from '../data/items';
import './item.css';

export default function Items() {
	const params = useParams();

	/** @type { { id: number; name: string; price: string; image: string; description: string; } } */
	const item = itemData.get(Number(params.itemId));

	return (
		<div>
			<div className="item-card" key={item.id}>
				<h1 className="item-header">{item.name}</h1>
				<img className="item-image" src={item.image} alt={`picture depicting ${item.name}`} />
				<p>${item.price}</p>
				<p>{item.description}</p>
			</div>
		</div>
	);
}
