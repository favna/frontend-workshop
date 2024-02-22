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
			
		</div>
	);
}
