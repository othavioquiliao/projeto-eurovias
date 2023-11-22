<script lang="ts">
	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import {
		Laptop,
		Smartphone,
		UserPlus,
		FileX2,
		FileStack,
		FileBox,
		UserX,
		FilePlus2,
		Users,
		Wrench,
		Store
	} from 'lucide-svelte';
	import { page } from '$app/stores';

	export let currentMenu: number;
</script>

<div class="p-4 pb-20 space-y-4 overflow-y-auto w-full">
	{#if currentMenu == 1}
		<p class="font-bold pl-4 mb-2 h3 text-center">Ordens</p>
		<nav class="list-nav">
			<ul>
				<li>
					<a
						href="/servicos/abertas"
						class="gap-2 {$page.url.pathname === '/servicos/abertas'
							? 'bg-primary-active-token'
							: ''}"
					>
						<FileBox /> Em aberto</a
					>
				</li>
				<li>
					<a
						href="/servicos/nova"
						class="gap-2 {$page.url.pathname === '/servicos/nova' ? 'bg-primary-active-token' : ''}"
					>
						<FilePlus2 />Nova ordem</a
					>
				</li>
				<li>
					<a
						href="/servicos/fechadas"
						class="gap-2 {$page.url.pathname === '/servicos/fechadas'
							? 'bg-primary-active-token'
							: ''}"
					>
						<FileX2 /> Fechadas
					</a>
				</li>
				<li>
					<a
						href="/servicos/todas"
						class="gap-2 {$page.url.pathname === '/servicos/todas'
							? 'bg-primary-active-token'
							: ''}"
					>
						<FileStack />Todos</a
					>
				</li>
			</ul>
		</nav>
	{:else if currentMenu == 2}
		<p class="font-bold pl-4 mb-2 h3 text-center">Solicitaçoes</p>
		<nav class="list-nav">
			<ul>
				<li>
					<a
						href="/contratos/solicitacoes"
						class="gap-2 {$page.url.pathname === '/contratos/solicitacoes'
							? 'bg-primary-active-token'
							: ''}"
					>
						<Smartphone />Contrato / Aditivo</a
					>
				</li>
			</ul>
		</nav>
	{:else if currentMenu == 3}
		<p class="font-bold pl-4 mb-2 h3 text-center">Estoque</p>
		<nav class="list-nav">
			<ul>
				<li>
					<a
						href="/estoque/oficina"
						class="gap-2 {$page.url.pathname === '/estoque/oficina'
							? 'bg-primary-active-token'
							: ''}"
					>
						<Wrench /> Oficina</a
					>
				</li>
				<li>
					<a
						href="/estoque/loja"
						class="gap-2 {$page.url.pathname === '/estoque/loja' ? 'bg-primary-active-token' : ''}"
					>
						<Store /> Loja</a
					>
				</li>
			</ul>
		</nav>
	{/if}
</div>
