import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

/** @param {import('../../api/types').Item} data */
export default function Item(data) {
	return (
		<Card raised>
			<CardActionArea>
				<CardMedia component={Link} href={`/item/${data.id}`} height="260" image={data.image} alt={data.name} />
				<CardContent>
					<Typography variant="body2" color="text.secondary" noWrap>
						{data.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
				<Button size="small" color="error" component={Link} href={`/item/${data.id}`}>
					View
				</Button>
				<Typography variant="subtitle2" color="text.secondary" align="right">
					${data.price}
				</Typography>
			</CardActions>
		</Card>
	);
}
