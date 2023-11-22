import type { PageServerLoad } from './$types';
import { bancoCelulares } from '$lib/server/bd';

export const load = (async () => {
	return {
		status: 200,
		body: bancoCelulares
	};
}) satisfies PageServerLoad;
