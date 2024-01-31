import { prisma } from '$lib/prisma';
import { redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
	const url = await prisma.url.findFirst({ where: { short_code: params.short } });
	if (url) redirect(301, url.long_url);
	redirect(301, '/');
};
