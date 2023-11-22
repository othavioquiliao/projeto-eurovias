import type { PageServerLoad } from './$types';
import { bancoSolicitacoes } from '$lib/server/db-solicitacoes';

export const load = (async () => {
	return {
		solicitacoes: bancoSolicitacoes
	};
}) satisfies PageServerLoad;
