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
export default function Item(item) {
	const router = useRouter();

	const routeForItem = `/item/${item.id}`;

	return (
		
	);
}
