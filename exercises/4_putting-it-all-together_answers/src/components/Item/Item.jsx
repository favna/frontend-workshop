'use client';

import { Button, CardActionArea, CardActions } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/** @param {import('../../api/types').Item} item */
export default function Item(item) {
	const router = useRouter();

	return (
		<Card raised>
			<CardActionArea>
				<CardMedia component="img" height="260" image={item.image} alt={item.name} onClick={() => router.push(`/item/${item.id}`)} />
				<CardContent>
					<Typography variant="body2" color="text.secondary" noWrap>
						{item.name}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-around' }}>
				<Button size="small" color="error" component={Link} href={`/item/${item.id}`}>
					View
				</Button>
				<Typography variant="subtitle2" color="text.secondary" align="right">
					${item.price}
				</Typography>
			</CardActions>
		</Card>
	);
}