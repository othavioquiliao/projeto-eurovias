<script lang="ts">
	import TableComputadores from '$lib/components/Table/TableComputadores.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	let bancoTeste = data.body;
</script>

<TableComputadores {bancoTeste} />
