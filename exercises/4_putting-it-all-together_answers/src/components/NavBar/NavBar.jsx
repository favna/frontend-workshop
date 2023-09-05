import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import MenuNavList from './MenuNavList';

export default function NavBar() {
	const pages = ['Home'];

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<MenuNavList pages={pages} />
				</Toolbar>
			</Container>
		</AppBar>
	);
}
