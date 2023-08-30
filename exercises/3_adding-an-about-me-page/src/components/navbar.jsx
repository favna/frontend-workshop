import Link from '@/components/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static" color="transparent">
				<Toolbar sx={{ gap: 2 }}>
					<Button variant="contained" color="primary">
						<Link color="inherit" underline="none" href="/">Home</Link>
					</Button>
					<Button variant="contained" color="primary">
						<Link color="inherit" underline="none" href="/about">About</Link>
					</Button>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
