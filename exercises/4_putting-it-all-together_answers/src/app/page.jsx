import Item from '@/components/Item/Item';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
export default async function Home() {
	const items = await getData();

	return (
		<Box component="main">
			<Grid container spacing={4} py={3}>
				{items.map((item) => (
					<Grid item xs={12} sm={6} lg={3} key={item.id}>
						<Item {...item} />
					</Grid>
				))}
			</Grid>
		</Box>
	);
}

/**
 * @returns {Promise<import('@/api/types').Item[]>}
 */
async function getData() {
	const res = await fetch('http://localhost:3000/api/items');
	return res.json();
}
