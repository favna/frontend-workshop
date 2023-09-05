import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import NextLink from 'next/link';

export default function NavBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Toolbar sx={{ gap: 2 }}>
					<Button variant="contained" color="primary" component={NextLink} href="/">
						Home
					</Button>
					<Button variant="contained" color="primary" component={NextLink} href="/about">
						About
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
