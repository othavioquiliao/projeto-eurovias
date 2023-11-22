<script lang="ts">
	import { Paginator, type PaginationSettings, SlideToggle } from '@skeletonlabs/skeleton';
	import { PenSquare, Pencil, XCircle } from 'lucide-svelte';

	export let dbClientes;
	let dadosDoBanco = dbClientes;

	let paginationSettings = {
		page: 0,
		limit: 10,
		size: dadosDoBanco.length,
		amounts: [10, 20, 30, 50, 100, 200]
	} satisfies PaginationSettings;

	let pesquisar = '';

	let dataPagina: {
		nomeCompleto: String;
		celular: String;
		email: String;
	}[];

	$: filteredClients = dadosDoBanco.filter((cliente: any) => {
		const search = pesquisar.toLowerCase();

		return (
			search === '' ||
			cliente.nomeCompleto.toLowerCase().includes(search) ||
			cliente.email.toLowerCase().includes(search) ||
			cliente.celular.toLowerCase().includes(search)
		);
	});

	$: paginationSettings.size = filteredClients.length;

	$: dataPagina = filteredClients.slice(
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
	</div>
	<table class="table table-hover w-10/12">
		<thead>
			<tr>
				<th class="w-1/4 text-base">Nome</th>
				<th class="w-1/4 text-base">E-mail</th>

				<th class="w-1/4 text-base">Celular</th>

				<th class="w-1/4 text-base" />
			</tr>
		</thead>
		<tbody class="divide-y w-full">
			{#each filteredClients as cliente, i}
				<tr>
					<td>{cliente.nomeCompleto}</td>
					<td>{cliente.email}</td>
					<td>{cliente.celular}</td>
					<td class="flex justify-center gap-8">
						<button type="button" class="btn-icon btn-icon-sm"><PenSquare /></button>
						<button type="button" class="btn-icon btn-icon-sm"><XCircle /></button>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
	<div class="pt-4 w-9/12">
		<Paginator
			bind:settings={paginationSettings}
			showFirstLastButtons={false}
			showPreviousNextButtons={true}
			showNumerals
			maxNumerals={1}
			justify="justify-between"
			controlVariant="variant-filled-surface h-8"
			active="variant-ghost-primary "
			regionControl="btn-group "
		/>
	</div>
</div>
