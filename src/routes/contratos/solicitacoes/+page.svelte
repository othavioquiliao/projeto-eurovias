<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form class=" ">
	<div class="flex justify-center h-1/2 gap-10 p-4">
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 text-primary-500">Informaçoes do Solicitante</span>
			<select class="select">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
				<option value="5">Option 5</option>
			</select>

			<div class="flex flex-col w-full">
				<span class="flex">Nome comepleto</span>
				<span>Cargo/Funçao</span>
				<span>Label</span>
				<span>Setor</span>
				<span>E-mail</span>
			</div>
		</label>
		<span class="border border-opacity-30 border-surface-500 h-full" />
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 text-primary-500">Informaçoes do Solicitante</span>
			<select class="select">
				<option value="1">Option 1</option>
				<option value="2">Option 2</option>
				<option value="3">Option 3</option>
				<option value="4">Option 4</option>
				<option value="5">Option 5</option>
			</select>
			<div class="flex flex-col w-full">
				<span>Empresa</span>
				<span>CNPJ</span>
				<span>Endereço completo</span>
			</div>
			<hr class="!border-t-8 !border-double" />
			<span class="text-primary-500">Representante</span>
			<div class="flex flex-col w-full">
				<span>Nome respresentante</span>
				<span>E-mail representante</span>
				<span>Telefone representante</span>
			</div>
			<hr class="!border-t-8 !-double" />
			<span class="text-primary-500">Comercial</span>
			<div class="flex flex-col w-full">
				<span>Nome Comercial</span>
				<span>E-mail comercial</span>
				<span>Telefone comercial</span>
			</div>
		</label>
	</div>
	<div class="flex flex-col">
		<label class="label">
			<span>Data prevista de inicio</span>
			<input class="input" title="Input (date)" type="date" />
		</label>
		<span>Prazo contratual</span>
		<span>Retençao contratual 5%</span>
		<span>Seguro garantido (sim/nao)</span>
	</div>
</form>
