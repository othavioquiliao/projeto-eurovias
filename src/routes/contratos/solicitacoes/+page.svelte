<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<form class="container p-5">
	<div class="flex justify-center h-1/2 gap-10">
		<label class="label w-1/2 flex flex-col items-center">
			<span class="h5 font-bold">Informaçoes do Solicitante</span>
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
			<span class="h5 font-bold">Informações do empreiteiro/ prestador/ locador</span>
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
			<span class="h5 font-bold">Representante</span>
			<div class="flex flex-col w-full">
				<span>Nome respresentante</span>
				<span>E-mail representante</span>
				<span>Telefone representante</span>
			</div>
			<hr class="!border-t-8 !-double" />
			<span class="h5 font-bold">Comercial</span>
			<div class="flex flex-col w-full">
				<span>Nome Comercial</span>
				<span>E-mail comercial</span>
				<span>Telefone comercial</span>
			</div>
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
</form>
