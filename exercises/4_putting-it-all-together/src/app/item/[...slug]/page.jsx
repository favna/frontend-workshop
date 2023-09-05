import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default async function ItemPage({ params }) {
	const item = await getData(params.slug);

	return (
		<Grid container mt={5} spacing={3}>
			<Grid item sm={6} md={4}>
				<Card raised>
					<CardMedia component="img" image={item.image} alt={`picture depicting ${item.name}`} />
				</Card>
				<Box display="flex" justifyContent="space-between" mt={1} alignContent="center">
					<Typography component="h5" variant="h6" textAlign="center">
						${item.price}
					</Typography>
				</Box>
			</Grid>

			<Grid item xs={12} sm={6} md={8}>
				<Typography component="h3" textAlign="center" gutterBottom>
					{item.name}
				</Typography>
				<Divider />

				<Typography variant="caption" component="p">
					{item.description}
				</Typography>
				<Divider sx={{ mb: 2 }} />
			</Grid>
		</Grid>
	);
}

/**
 * @param {string} id the id of the item to add to the cart
 * @returns {Promise<import('@/api/types').Item>}
 */
async function getData(id) {
	const res = await fetch(`http://localhost:3000/api/items/${id}`);
	return res.json();
}
