<script lang="ts">
	import SidebarLinks from '$lib/components/SidebarLinks.svelte';

	import '../app.postcss';
	import {
		AppShell,
		AppBar,
		AppRail,
		AppRailTile,
		AppRailAnchor,
		ListBox,
		ListBoxItem
	} from '@skeletonlabs/skeleton';

	// Floating UI for Popups
	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });
	import { Mail, LogOut, PackageSearch, UserCircle2, FileSearch } from 'lucide-svelte';
	import { page } from '$app/stores';

	let currentMenu: number = 1;
	$: page.subscribe((value) => {
		if (value.url.pathname === '/solicitacoes/abertas') {
			currentMenu = 1;
		} else if (value.url.pathname === '/solicitacoes/fechadas') {
			currentMenu = 1;
		} else if (value.url.pathname === '/solicitacoes/todas') {
			currentMenu = 1;
		} else if (value.url.pathname === '/contratos/solicitacoes') {
			currentMenu = 2;
		} else if (value.url.pathname === '/estoque/oficina') {
			currentMenu = 3;
		} else if (value.url.pathname === '/estoque/loja') {
			currentMenu = 3;
		}
	});
</script>

<AppShell>
	<!-- (header) -->
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead">(icon)</svelte:fragment>
			(title)
			<svelte:fragment slot="trail">(Icone do colaborador)</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- (sidebarLeft) -->
	<svelte:fragment slot="sidebarLeft">
		<aside class="flex w-80 h-full border-r border-gray-500 border-opacity-20">
			<div>
				<AppRail width="overflow-y-auto bg-transparent w-20 ">
					<AppRailTile bind:group={currentMenu} name="solicitacoes" value={1} title="solicitacoes">
						<svelte:fragment slot="lead">
							<span class=" flex flex-col items-center text-sm gap-1">
								<FileSearch size={30} />Serviçoes
							</span>
						</svelte:fragment>
					</AppRailTile>

					<AppRailTile bind:group={currentMenu} name="estoque" value={2} title="contratos">
						<svelte:fragment slot="lead">
							<span class=" flex flex-col items-center text-sm gap-1">
								<PackageSearch size={30} /> Contratos
							</span>
						</svelte:fragment>
					</AppRailTile>

					<AppRailTile bind:group={currentMenu} name="estoque" value={3} title="estoque">
						<svelte:fragment slot="lead">
							<span class=" flex flex-col items-center text-sm gap-1">
								<PackageSearch size={30} />Estoque
							</span></svelte:fragment
						>
					</AppRailTile>

					<svelte:fragment slot="trail">
						<AppRailAnchor>
							<span class="flex flex-col items-center">
								<LogOut size={30} />
							</span></AppRailAnchor
						>
					</svelte:fragment>
				</AppRail>
			</div>
			<!-- Sidebar Links -->
			<SidebarLinks {currentMenu} />
		</aside>
	</svelte:fragment>
	<!-- (sidebarRight) -->
	<!-- (pageHeader) -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- (pageFooter) -->
	<!-- (footer) -->
</AppShell>
