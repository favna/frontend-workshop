import { useNavigate } from 'react-router-dom';
import { itemData } from '../data/items';
import './home.css';

export default function Home() {
	let navigate = useNavigate();

	function handleNavigate(id) {
		navigate(`/item/${id}`);
	}

	return (
		<div className="home-card-container">
			{[...itemData.values()].map((item) => (
				<div className="home-card" key={item.id}>
					<h1 className="home-header">{item.name}</h1>
					<img onClick={() => handleNavigate(item.id)} className="image" src={item.image} alt={`picture depicting ${item.name}`} />
					<p>${item.price}</p>
				</div>
			))}
		</div>
	);
}
