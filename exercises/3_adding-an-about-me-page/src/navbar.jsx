import { Link } from 'react-router-dom';
import './navbar.css';

export default function NavBar() {
	const pages = ['home', 'about'];

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
