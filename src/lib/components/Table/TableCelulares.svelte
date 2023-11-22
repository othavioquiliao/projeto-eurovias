<script lang="ts">
	import { slide } from 'svelte/transition';
	import { Paginator, type PaginationSettings, SlideToggle } from '@skeletonlabs/skeleton';

	export let bancoTeste;
	let dadosDoBanco = bancoTeste;

	let paginationSettings = {
		page: 0,
		limit: 10,
		size: dadosDoBanco.length,
		amounts: [10, 20, 30, 50, 100, 200]
	} satisfies PaginationSettings;

	let pesquisar = '';
	let pesquisarnumero = false;
	let pesquisarUser = false;

	let openRow: any;
	let details: any;

	let dataPagina: {
		fabricante: String;
		colaborador: String;
		modelo: String;
		numero: String;
		serial: String;
		especificacoes: String;
		ativo: boolean;
		createdAt: String;
		updatedAt: String;
	}[];

	const toggleRow = (i: number) => {
		openRow = openRow === i ? null : i;
	};

	$: filteredItems = dadosDoBanco.filter((item: any) => {
		const search = pesquisar.toLowerCase();
		return (
			(search === '' ||
				item.fabricante.toLowerCase().includes(search) ||
				item.colaborador.toLowerCase().includes(search) ||
				item.numero.toLowerCase().includes(search) ||
				item.modelo.toLowerCase().includes(search)) &&
			(!pesquisarnumero || item.numero.toLowerCase().includes(search)) &&
			(!pesquisarUser || item.colaborador.toLowerCase().includes(search)) &&
			item.ativo === true
		);
	});

	$: paginationSettings.size = filteredItems.length;

	$: dataPagina = filteredItems.slice(
		paginationSettings.page * paginationSettings.limit,
		paginationSettings.page * paginationSettings.limit + paginationSettings.limit
	);
</script>

<div class="min-w-fit flex justify-center items-center flex-col">
	<div class="w-1/4 py-4">
		<input class="input h-10" type="text" placeholder="Pesquisar..." bind:value={pesquisar} />
	</div>
	<table class="table table-hover w-9/12">
		<thead>
			<tr>
				<th class="w-1/4 text-base">Fabricante</th>
				<th class="w-1/4 text-base">Colaborador</th>
				<th class="w-1/4 text-base">Numero</th>
				<th class="w-1/4 text-base">Modelo</th>
			</tr>
		</thead>
		<tbody class="divide-y w-full">
			{#each dataPagina as item, i}
				<tr on:click={() => toggleRow(i)}>
					<td>{item.fabricante}</td>
					<td>{item.colaborador}</td>
					<td>{item.numero}</td>
					<td>{item.modelo}</td>
				</tr>
				{#if openRow === i}
					<tr
						class="border border-primary-600"
						on:dblclick={() => (details = item)}
						transition:slide={{ duration: 300, axis: 'y' }}
					>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">User Maquina: </span>{item.colaborador}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Numero:</span> {item.numero}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Numero de Serie: </span> {item.serial}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Modelo: </span> {item.modelo}</td
						>
					</tr>
					<tr>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Fabricante:</span> {item.fabricante}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Criado:</span> {item.createdAt}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Ultima modificação: </span> {item.createdAt}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Especificações: </span> {item.especificacoes}</td
						>
					</tr>
				{/if}
			{/each}
		</tbody>
	</table>
	<div class="container pt-4 w-1/2 md:w-full">
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={false}
			showPreviousNextButtons={true}
			showNumerals
			maxNumerals={1}
			justify="justify-center"
			controlVariant="variant-filled-surface md:h-8 xl:h-10"
			active="variant-ghost-primary"
			regionControl="btn-group"
		/>
	</div>
</div>
