<script lang="ts">
	import { ProgressRadial, SlideToggle } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let pessoa: any = [];
	let empresa: any = [];
	onMount(async () => {
		const response = await fetch('/contratos/solicitacoes');
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

<form class="container p-5" method="POST" action="?/criarSolicitacaoContrato">
	<div class="flex justify-center h-[22rem] gap-5">
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 font-bold">Informaçoes do Solicitante</span>
			<select class="select" bind:value={pessoaSelecionada} name="solicitante">
				<option value hidden>Selecione o solicitante</option>
				{#each pessoa as pessoa}
					<option value={[pessoa.nome_completo, pessoa.cargo.nome, pessoa.email.email]}>
						{pessoa.nome_completo}
					</option>
				{/each}
			</select>
			{#if pessoaSelecionada}
				<div class="flex flex-col w-full pb-10 pt-2">
					<span>Cargo/Funçao: {pessoaSelecionada[1]}</span>
					<span>Setor: aqui vai o setor</span>
					<span>Email: {pessoaSelecionada[2]}</span>
				</div>
			{/if}
			<div
				class="flex w-full flex-wrap justify-between border-y-2 border-surface-500 border-opacity-30 py-8"
			>
				<label class="label space-y-2 w-[29%%]">
					<p class="h5 font-bold">Data prevista de inicio:</p>
					<input class="input" title="Input (date)" type="date" name="dataPrevisaoInicio" />
				</label>
				<label class="label space-y-2 w-[28%]">
					<p class="h5 font-bold">Prazo contratual</p>
					<div class="flex input-group">
						<input class="p-2 border-r-2 border-red-700 w-16" type="number" name="prazoContrato" />
						<select name="prazoContratoPeriodo" class="w-full">
							<option>Semana</option>
							<option>Mes</option>
							<option>Ano</option>
						</select>
					</div>
				</label>
				<div class="flex flex-col justify-end gap-2">
					<label class="flex items-center space-x-2 w-full">
						<input class="checkbox" type="checkbox" name="seguroGarantido" />
						<p>Seguro garantido</p>
					</label>
					<label class="flex items-center space-x-2 w-full">
						<input class="checkbox" type="checkbox" name="retencaoContratual" />
						<p>Retençao contratual 5%</p>
					</label>
				</div>
			</div>
		</label>

		<span class="border border-opacity-30 border-surface-500 h-full" />
		<label class="label w-1/2 flex flex-col">
			<span class="h5 font-bold text-center">Informações do empreiteiro/ prestador/ locador</span>
			<select class="select" bind:value={empresaSelecionada} name="empresa">
				<option value hidden>Selecione uma empresa</option>
				{#each empresa as empresa}
					<option
						value={[
							empresa.nome_fantasia,
							empresa.cnpj,
							empresa.endereco,
							empresa.nome_representante,
							empresa.nome_comercial,
							empresa.telefone_comercial
						]}
					>
						{empresa.nome_fantasia}
					</option>
				{/each}
			</select>
			{#if empresaSelecionada}
				<div class="flex flex-col w-full">
					<p>CNPJ: {empresaSelecionada[1]}</p>
					<p>Endereço: {empresaSelecionada[2]}</p>
				</div>
				<hr />
				<p class="h5 font-bold">Representante</p>
				<div class="flex flex-col w-full">
					<p>Nome: {empresaSelecionada[3]}</p>
					<p>E-mail: FALTA</p>
					<p>Telefone: FALTA</p>
				</div>
				<hr />
				<p class="h5 font-bold">Comercial</p>
				<div class="flex flex-col w-full">
					<p>Nome: {empresaSelecionada[4]}</p>
					<p>E-mail: FALTA</p>
					<p>Telefone: {empresaSelecionada[5]}</p>
				</div>
			{/if}
		</label>
	</div>

	<div class="container space-y-2 p-5">
		<label class="label">
			<span class="h5 font-bold">Objeto do contrato</span>
			<textarea
				class="textarea"
				rows="4"
				name="textObjetoDoContrato"
				placeholder="Descreva o objeto do contrato solicitado"
			/>
		</label>

		<label class="label">
			<span class="h5 font-bold">Obrigações da CONTRATANTE /LOCATÁRIA</span>
			<textarea
				class="textarea"
				rows="4"
				name="textObrigacoesLocatario"
				placeholder="Descrever obrigações tratadas pelas partes que se fazem necessárias em contrato"
			/>
		</label>

		<label class="label">
			<span class="h5 font-bold">Obrigações da CONTRATADA /LOCADORA</span>
			<textarea
				class="textarea"
				rows="4"
				name="textObrigacoesLocadora"
				placeholder="Descrever obrigações tratadas pelas partes que se fazem necessárias em contrato"
			/>
		</label>
	</div>
	<div class=" flex space-y-2 justify-evenly px-5 w-full flex-wrap">
		<span class="flex w-1/3 items-center justify-center gap-x-3 h5 font-bold">
			Mão de obra: <SlideToggle name="maoDeObra" active="bg-primary-500" size="md" />
		</span>
		<label class="label flex items-center w-1/3 justify-center gap-x-5">
			<p class="h5 font-bold">Data da solicitação:</p>
			<input class="input w-[40%]" title="Input (date)" type="date" name="dataDaSolicitacao" />
		</label>
	</div>
	<button type="submit" class="btn variant-filled-primary text-lg font-bold">Enviar email</button>
</form>
