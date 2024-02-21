import './navbar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
	const pages = ['home', 'drinking', 'effect', 'lists', 'props', 'ref', 'state'];
	return (
		<nav>
			{pages.map((page, index) => (
				<Link key={index} to={page === 'home' ? '/' : `/${page}`}>
					<button className="nav-button">{page}</button>
				</Link>
			))}
		</nav>
	);
}
