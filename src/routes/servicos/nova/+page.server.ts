// import type { Actions } from '@sveltejs/kit';
// import transporter from '$lib/server/mail.server';
// import { SENDER_EMAIL } from '$env/static/private';
// import logoEurovias from '$lib/assets/New_Logo_Eurovias.png';

// export const actions = {
// 	enviarEmail: async ({ request }) => {
// 		transporter.verify(function (error, success) {
// 			if (error) {
// 				console.error(error);
// 			} else {
// 				console.log('Servidor pronto para enviar emails');
// 				console.log(success);
// 			}
// 		});

// 		try {
// 			const formData = await request.formData();
// 			const acessosCrtiTxt = formData.get('acessosCrtiTxt');
// 			const sliderCrti = formData.get('sliderCrti');
// 			const sliderLinha = formData.get('sliderLinha');
// 			const sliderCelular = formData.get('sliderCelular');
// 			const sliderNotebook = formData.get('sliderNotebook');
// 			const setor = formData.get('setor');
// 			const cargo = formData.get('cargo');
// 			const celular = formData.get('celular');
// 			const cpf = formData.get('cpf');
// 			const nomeCompleto = formData.get('nomeCompleto');
// 			const html = `
//     <h2>Hi ${nomeCompleto},</h2>
//     <p>Este é o texto:</p>
//     <ul>
//         <li>${acessosCrtiTxt}</li>
//         <li>${setor}</li>
//         <li>${cargo}</li>
//         <li>${sliderCrti}</li>
//         <li>${sliderCelular}</li>
//         <li>${sliderLinha}</li>
//         <li>${sliderNotebook}</li>
//         <li>${cpf}</li>
//         <li>${celular}</li>
//     </ul>
// <img src="${logoEurovias}" alt="Descrição da imagem">
// `;

// 			const send = async () => {
// 				const RECIVER_01_EMAIL = 'thewanndark@gmail.com';
// 				const RECIVER_02_EMAIL = 'othavio.quiliao@eurovias.com.br';

// 				const info = await transporter.sendMail({
// 					from: SENDER_EMAIL, // sender address
// 					to: [RECIVER_01_EMAIL, RECIVER_02_EMAIL], // list of receivers
// 					// cc: CC_SENDER, // array de endereços de cópia
// 					subject: 'Solicitação de acesso ao sistema', // Subject line
// 					html
// 				});
// 				console.log('Message sent: %s', info);
// 			};

// 			await send();

// 			return {
// 				status: 200,
// 				success: 'Email enviado com sucesso'
// 			};
// 		} catch (error) {
// 			console.error(error);
// 		}
// 	}
// } satisfies Actions;
