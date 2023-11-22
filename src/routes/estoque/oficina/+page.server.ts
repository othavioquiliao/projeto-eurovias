import type { PageServerLoad } from './$types';
import { bancoNotebooks } from '$lib/server/bd';

export const load = (async () => {
	return {
		body: bancoNotebooks
	};
}) satisfies PageServerLoad;
