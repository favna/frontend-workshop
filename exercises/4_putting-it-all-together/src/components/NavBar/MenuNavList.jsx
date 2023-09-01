import { useState } from 'react';
import NavLink from 'next/link';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const MenuNavList = ({ pages }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<>
			<Box
				sx={{
					display: { xs: 'flex', md: 'none' }
				}}
			>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					keepMounted
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left'
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: { xs: 'block', md: 'none' }
					}}
				>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu} component={NavLink} href={page.toLowerCase()}>
							<Typography textAlign="center">{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						component={NavLink}
						href={page.toLowerCase()}
						sx={{
							color: '#bdbdbd',
							'&.active': { color: 'white' },
							'&:hover': { color: 'white' }
						}}
					>
						{page}
					</Button>
				))}
			</Box>
		</>
	);
};

export default MenuNavList;
