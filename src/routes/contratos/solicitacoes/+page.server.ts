/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Actions } from './$types';

export const actions = {
	criarSolicitacaoContrato: async ({ request }) => {
		const data = await request.formData();
		const dataSolicitante = data.get('solicitante')?.split(',');
		const dataEmpresa = data.get('empresa');

		const id_pessoa_solicitante = dataSolicitante[4];
		// erro por causa do split usando , como separador
		const id_empresa_solicitante = dataEmpresa;
		console.log(id_empresa_solicitante);

		const previsao_inicio_contrato = data.get('dataPrevisaoInicio');
		const prazo_contrato = data.get('prazoContrato');
		const prazo_contrato_periodo = data.get('prazoContratoPeriodo');
		const seguro_garantido = data.get('seguroGarantido');
		const retencoes_constratuais = data.get('retencaoContratual');
		// ---- text areas ----
		const contrato_objeto = data.get('textObjetoDoContrato');
		const contrato_obrigacoes_contratante = data.get('textObrigacoesLocatario');
		// ---- outras variaveis ----
		const mao_obra = data.get('maoDeObra');
		const data_da_solicitacao = data.get('dataDaSolicitacao');
	}
} satisfies Actions;
