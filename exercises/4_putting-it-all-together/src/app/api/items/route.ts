import { itemData } from '@/api/data';
import { Item } from '@/api/types';
import { NextResponse } from 'next/server';

export async function GET(): Promise<NextResponse<Item[]>> {
	// @ts-expect-error skipping configuring downlevel iterators for this exercise
	return NextResponse.json<Item[]>([...itemData.values()]);
}
