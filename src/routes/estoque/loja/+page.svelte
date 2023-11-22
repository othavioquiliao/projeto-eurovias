<script lang="ts">
	import TableCelulares from '$lib/components/Table/TableCelulares.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let bancoTeste = data.body;
</script>

<TableCelulares {bancoTeste} />
