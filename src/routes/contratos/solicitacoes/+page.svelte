<script lang="ts">
	import { ProgressBar, ProgressRadial } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let pessoa: any = [];
	let empresa: any = [];
	onMount(async () => {
		const response = await fetch('/api/contratos/solicitacoes');
		if (response.ok) {
			const data = await response.json();
			pessoa = data.pessoa;
			empresa = data.empresa;
		} else {
			console.error('Erro ao buscar dados');
		}
	});

	let pessoaSelecionada: any = '';
	let empresaSelecionada: any = '';
</script>

<form class="container p-5" action="?/criar_solicitacao">
	<div class="flex justify-center h-1/2 gap-10">
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 font-bold">Informaçoes do Solicitante</span>
			<select class="select" bind:value={pessoaSelecionada}>
				<option value hidden>Selecione o solicitante</option>
				{#each pessoa as pessoa}
					<option value={[pessoa.nome_completo, pessoa.empresa.nome_fantasia, pessoa.id_email]}>
						{pessoa.nome_completo}
					</option>
				{/each}
			</select>
			{#if pessoaSelecionada}
				<div class="flex flex-col w-full">
					<span>{pessoaSelecionada[0]}</span>
					<span>{pessoaSelecionada[1]}</span>
					<span>{pessoaSelecionada[2]}</span>
				</div>
			{/if}
		</label>

		<span class="border border-opacity-30 border-surface-500 h-full" />
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 font-bold">Informações do empreiteiro/ prestador/ locador</span>
			<select class="select" bind:value={empresaSelecionada}>
				<option hidden>Selecione uma empresa</option>
				{#each empresa as empresa}
					<option
						value={[
							empresa.nome_fantasia,
							empresa.cnpj,
							empresa.endereco,
							empresa.nome_representante,
							empresa.nome_comercial,
							empresa.telefone_comercial
						]}>{empresa.nome_fantasia}</option
					>
				{/each}
			</select>
			{#if empresaSelecionada}
				<div class="flex flex-col w-full">
					<span>CNPJ: {empresaSelecionada[1]}</span>
					<span>Endereço: {empresaSelecionada[2]}</span>
				</div>
				<hr class="!border-t-8 !border-double" />
				<span class="h5 font-bold">Representante</span>
				<div class="flex flex-col w-full">
					<span>Nome respresentante: {empresaSelecionada[3]}</span>
					<span>E-mail representante: FALTA</span>
					<span>Telefone representante: FALTA</span>
				</div>
				<hr class="!border-t-8 !-double" />
				<span class="h5 font-bold">Comercial</span>
				<div class="flex flex-col w-full">
					<span>Nome Comercial: {empresaSelecionada[4]}</span>
					<span>E-mail comercial: FALTA</span>
					<span>Telefone comercial: {empresaSelecionada[5]}</span>
				</div>
			{/if}
		</label>
	</div>
	<div
		class="flex w-full flex-wrap justify-evenly border-y-2 border-surface-500 border-opacity-30 pt-5 mt-5"
	>
		<label class="label space-y-2">
			<p class="h5 font-bold">Data prevista de inicio</p>
			<input class="input" title="Input (date)" type="date" />
		</label>
		<label class="label space-y-2">
			<p class="h5 font-bold">Prazo contratual</p>
			<div class="flex input-group">
				<input class="w-full p-2" type="" placeholder="" />
				<select class="">
					<option>Semana</option>
					<option>Mes</option>
					<option>Ano</option>
				</select>
			</div>
		</label>

		<div class="flex flex-col space-y-2 py-5">
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" checked />
				<p>Retençao contratual 5%</p>
			</label>
			<label class="flex items-center space-x-2">
				<input class="checkbox" type="checkbox" />
				<p>Seguro garantido</p>
			</label>
		</div>
	</div>

	<div class="container space-y-2 p-5">
		<label class="label">
			<span class="h5 font-bold">Objeto do contrato</span>
			<textarea class="textarea" rows="4" placeholder="Descreva o objeto do contrato solicitado" />
		</label>

		<label class="label">
			<span class="h5 font-bold">Obrigações da CONTRATANTE /LOCATÁRIA</span>
			<textarea
				class="textarea"
				rows="4"
				placeholder="Descrever obrigações tratadas pelas partes que se fazem necessárias em contrato"
			/>
		</label>

		<label class="label">
			<span class="h5 font-bold">Obrigações da CONTRATADA /LOCADORA</span>
			<textarea
				class="textarea"
				rows="4"
				placeholder="Descrever obrigações tratadas pelas partes que se fazem necessárias em contrato"
			/>
		</label>
	</div>
	<div class=" flex space-y-2 justify-evenly px-5 w-full flex-wrap">
		<label class="label flex items-center space-x-2 1/3">
			<p class="h5 font-bold">COM MÃO DE OBRA</p>
			<input class="checkbox" type="checkbox" />
		</label>
		<label class=" label flex items-center space-x-2 1/3">
			<p class="h5 font-bold">SEM MÃO DE OBRA</p>
			<input class="checkbox" type="checkbox" />
		</label>
		<label class="label space-y-2 flex items-center w-1/3">
			<p class="h5 font-bold w-1/2">Data da solicitaçao:</p>
			<input class="input w-[40%]" title="Input (date)" type="date" />
		</label>
	</div>
	<button type="submit" class="btn variant-filled-primary text-lg font-bold">Enviar email</button>
</form>
