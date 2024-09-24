import './navbar.css';

import { Link } from '@tanstack/react-router';

export function NavBar() {
	const pages = ['home'];

	return (
		<nav>
			{pages.map((page) => (
				<Link key={page} to={page === 'home' ? '/' : `/${page}`}>
					<button className="nav-button">{page}</button>
				</Link>
			))}
		</nav>
	);
}
