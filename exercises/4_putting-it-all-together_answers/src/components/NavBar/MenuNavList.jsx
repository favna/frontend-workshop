'use client';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import NavLink from 'next/link';
import { useState } from 'react';

const MenuNavList = ({ pages }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);

	/** @param {import('react').MouseEvent} event The click event */
	function handleOpenNavMenu(event) {
		setAnchorElNav(event.currentTarget);
	}

	function handleCloseNavMenu() {
		setAnchorElNav(null);
	}

	/** @param {string} page The page to parse */
	function getHref(page) {
		const lowerCasePage = page.toLowerCase();
		if (lowerCasePage === 'home') return '/';
		return lowerCasePage;
	}

	return (
		<>
			<Box
				sx={{
					display: {
						xs: 'flex',
						md: 'none'
					}
				}}
			>
				<IconButton
					size="large"
					aria-label="account of current user"
					aria-controls="menu-appbar"
					aria-haspopup="true"
					onClick={handleOpenNavMenu}
					color="inherit"
				>
					<MenuIcon />
				</IconButton>
				<Menu
					id="menu-appbar"
					anchorEl={anchorElNav}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left'
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'left'
					}}
					open={Boolean(anchorElNav)}
					onClose={handleCloseNavMenu}
					sx={{
						display: {
							xs: 'block',
							md: 'none'
						}
					}}
				>
					{pages.map((page) => (
						<MenuItem key={page} onClick={handleCloseNavMenu} component={NavLink} href={getHref(page)}>
							<Typography textAlign="center">{page}</Typography>
						</MenuItem>
					))}
				</Menu>
			</Box>
			<Box
				sx={{
					flexGrow: 1,
					display: {
						xs: 'none',
						md: 'flex'
					}
				}}
			>
				{pages.map((page) => (
					<Button
						key={page}
						onClick={handleCloseNavMenu}
						component={NavLink}
						href={getHref(page)}
						variant="contained"
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
