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
	let pesquisarColaborador = false;
	let pesquisarUser = false;

	let openRow: any;
	let details: any;

	let dataPagina: {
		nome: String;
		fabricante: String;
		userMaquina: String;
		colaborador: String;
		especificacoes: String;
		modelo: String;
		serial: String;
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
				item.userMaquina.toLowerCase().includes(search) ||
				item.colaborador.toLowerCase().includes(search) ||
				item.especificacoes.toLowerCase().includes(search)) &&
			(!pesquisarColaborador || item.colaborador.toLowerCase().includes(search)) &&
			(!pesquisarUser || item.userMaquina.toLowerCase().includes(search)) &&
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
	<div class="flex w-full justify-center items-center gap-5 py-4">
		<input
			class="input w-1/4 h-10 flex mr-20"
			type="text"
			placeholder="Pesquisar..."
			bind:value={pesquisar}
		/>
		<SlideToggle
			name="slider"
			checked={pesquisarUser}
			active="bg-primary-500"
			size="md"
			on:change={() => (pesquisarUser = !pesquisarUser)}>User</SlideToggle
		>
		<SlideToggle
			name="slider"
			checked={pesquisarColaborador}
			active="bg-primary-500"
			size="md"
			on:change={() => (pesquisarColaborador = !pesquisarColaborador)}>Colaboradores</SlideToggle
		>
	</div>
	<table class="table table-hover w-10/12">
		<thead>
			<tr>
				<th class="w-1/4 text-base">Fabricante</th>
				<th class="w-1/4 text-base">User</th>
				<th class="w-1/4 text-base">Colaborador</th>
				<th class="w-1/4 text-base">Especificações</th>
			</tr>
		</thead>
		<tbody class="divide-y w-full">
			{#each dataPagina as item, i}
				<tr on:click={() => toggleRow(i)}>
					<td>{item.fabricante}</td>
					<td>{item.userMaquina}</td>
					<td>{item.colaborador}</td>
					<td>{item.especificacoes}</td>
				</tr>
				{#if openRow === i}
					<tr
						class="border border-primary-600"
						on:dblclick={() => (details = item)}
						transition:slide={{ duration: 300, axis: 'y' }}
					>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Notebook:</span> {item.nome}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Colaborador:</span>
							{item.colaborador}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">User Maquina: </span>{item.userMaquina}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Fabricante:</span>
							{item.fabricante}</td
						>
					</tr>
					<tr>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Modelo: </span> {item.modelo}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Numero de Serie: </span>
							{item.serial}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Criado:</span> {item.createdAt}</td
						>
						<td class="border border-gray-700">
							<span class="font-bold w-full flex">Ultima modificação: </span>
							{item.createdAt}</td
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
