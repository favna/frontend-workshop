'use client';

import { useRouter } from 'next/navigation';

/** @param {import('../../api/types').Item} item */
export default function Item(props) {
	const router = useRouter();

	const routeForItem = `/item/${props.item.id}`;

	return <></>;
}
