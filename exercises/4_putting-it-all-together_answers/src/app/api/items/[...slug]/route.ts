import { itemData } from '@/api/data';
import { Item } from '@/api/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: { slug: string } }): Promise<NextResponse<Item>> {
	const id = Number(params.slug);
	if (isNaN(id)) return new NextResponse('Invalid item id provided', { status: 400 });

	const item = itemData.get(id);
	if (!item) return new NextResponse('Item not found', { status: 404 });

	return NextResponse.json<Item>(item);
}
