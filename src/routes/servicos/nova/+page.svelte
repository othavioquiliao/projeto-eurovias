<script lang="ts">
	import { SlideToggle } from '@skeletonlabs/skeleton';
	import type { PageData } from './$types';
	import { enhance } from '$app/forms';

	// export let data: PageData;
	let sliderNotebook = false;
	let sliderCelular = false;
	let sliderLinha = false;
	let sliderCrti = false;

	// ---- variaveis e binds para o input do formulario
	// ---- celular
	let celularNumber = '';
	$: isValidNumber = Number(celularNumber) > 0 && celularNumber.length < 12;
	$: isNotValidNumber = !isValidNumber && celularNumber.length > 0 && celularNumber !== '';

	// ---- cpf
	let cpfNumber = '';
</script>

<div class="flex flex-col items-center p-16 justify-center">
	<form
		action="?/enviarEmail"
		method="post"
		use:enhance
		class="w-8/12 gap-3 p-5 flex flex-wrap card"
	>
		<label class="flex flex-col gap-1 w-full">
			<span class="text-primary-500">Cliente:</span>
			<input
				name="nomeCompleto"
				class="input h-10"
				type="text"
				placeholder="Digite o nome completo"
				required
			/>
		</label>
		<div class="flex flex-wrap w-full">
			<label class="flex flex-col gap-1 w-full md:w-1/2 md:pr-3">
				<span class="text-primary-500">CPF:</span>
				<input
					name="cpf"
					class="input h-10"
					type="text"
					bind:value={cpfNumber}
					placeholder="Ex: 999.999.999-99"
					required
				/>
			</label>
			<label class="flex flex-col gap-1 w-full md:w-1/2 md:pl-3">
				<span class="text-primary-500">Celular particular:</span>
				<input
					name="celular"
					bind:value={celularNumber}
					class="input h-10"
					class:input-error={isNotValidNumber}
					type="text"
					placeholder="Ex: (99) 99999-9999"
				/>
				<span class={isNotValidNumber ? 'label-text-alt text-red-400' : 'hidden'}
					>Digite apenas numeros! ex: 51999888999</span
				>
			</label>
		</div>
		<div class="flex flex-wrap w-full">
			<label class="flex flex-col gap-1 w-full md:w-1/2 md:pr-3">
				<span class="text-primary-500">Cargo:</span>
				<input
					name="cargo"
					class="input h-10"
					type="text"
					placeholder="Ex: Assistente de engenharia "
				/>
			</label>
			<label class="flex flex-col gap-1 w-full md:w-1/2 md:pl-3">
				<span class="text-primary-500">Setor:</span>
				<input name="setor" class="input h-10" type="text" placeholder="Ex: Engenharia" />
			</label>
		</div>
		<div class="{sliderCrti ? '' : 'flex'} w-full items-center justify-between">
			<div class="flex w-full justify-between px-2">
				<div class="">
					<label for="slider-label" class="text-primary-500 pb-1">Notebook:</label>
					<SlideToggle
						name="sliderNotebook"
						bind:checked={sliderNotebook}
						active="bg-primary-500"
					/>
				</div>
				<div class="">
					<label for="slider-label" class="text-primary-500 pb-1">Celular:</label>
					<SlideToggle name="sliderCelular" bind:checked={sliderCelular} active="bg-primary-500" />
				</div>
				<div class="">
					<label for="slider-label" class="text-primary-500 pb-1">Linha corporativa:</label>
					<SlideToggle name="sliderLinha" bind:checked={sliderLinha} active="bg-primary-500" />
				</div>
				<div>
					<label for="slider-label" class="text-primary-500 pb-1">Observações:</label>
					<SlideToggle name="sliderCrti" bind:checked={sliderCrti} active="bg-primary-500" />
				</div>
			</div>
			<label class="label w-full pt-3 {sliderCrti ? '' : 'hidden'}">
				<textarea
					name="acessosCrtiTxt"
					class="textarea textarea-bordered h-24"
					rows="4"
					placeholder="Descreva as com mais detalhes o problema."
				/>
			</label>
		</div>

		<div
			class="flex w-full gap-20 pt-4 mt-2 justify-center border-t border-primary-500 border-opacity-10"
		>
			<button type="reset" class="btn variant-filled-primary w-40">Limpar </button>
			<button type="submit" class="btn variant-filled-primary w-40">Enviar </button>
		</div>
	</form>
</div>
