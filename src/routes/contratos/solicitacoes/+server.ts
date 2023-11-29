import type { RequestHandler } from './$types';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const GET: RequestHandler = async () => {
	const pessoa = await prisma.pessoa.findMany({
		include: {
			usuario: {
				select: {
					email: true,
					usuario: true
				}
			},
			empresa: true,
			cargo: true
		}
	});

	const empresa = await prisma.empresa.findMany();

	return new Response(
		JSON.stringify({
			pessoa,
			empresa
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	);
};
