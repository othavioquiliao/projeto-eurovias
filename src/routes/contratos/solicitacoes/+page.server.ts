import type { Actions } from './$types';

export const actions = {
	criarSolicitacaoContrato: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
	}
} satisfies Actions;
