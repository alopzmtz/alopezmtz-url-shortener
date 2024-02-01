import { prisma } from '$lib/prisma.js';
import { nanoid } from 'nanoid';

export const actions = {
	short: async ({ request, url }) => {
		const formData = await request.formData();
		const longUrl = formData.get('url') as string;

		if (longUrl) {
			const shortCode = nanoid(13);
			const dbUrl = await prisma.url.findFirst({
				where: {
					long_url: longUrl
				}
			});

			if (dbUrl) {
				return { short_url: `${url.origin}/${dbUrl.short_code}` };
			} else {
				const newUrl = await prisma.url.create({
					data: {
						long_url: longUrl,
						short_code: shortCode
					}
				});

				return { short_url: `${url.origin}/${newUrl.short_code}` };
			}
		}
	}
};
