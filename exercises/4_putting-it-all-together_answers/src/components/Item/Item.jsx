'use client';

import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/** @param {import('../../api/types').Item} item */
export default function Item(props) {
	const router = useRouter();

	const routeForItem = `/item/${props.item.id}`;

	return (
		<Card raised>
			<CardActionArea>
				<CardMedia component="img" height="260" image={props.item.image} alt={props.item.name} onClick={() => router.push(routeForItem)} />
				<CardContent>
					<Typography variant="body2" color="text.secondary" noWrap>
						{props.item.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
				<Button size="small" color="error" component={Link} href={routeForItem}>
					View
				</Button>
				<Typography variant="subtitle2" color="text.secondary" align="right">
					${props.item.price}
				</Typography>
			</CardActions>
		</Card>
	);
}
