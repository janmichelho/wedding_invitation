<script lang="ts">
	import AlignJustifyIcon from 'lucide-svelte/icons/align-justify';
	import { slide } from 'svelte/transition';

	let open = $state(false);
</script>

<header
	class="sticky left-0 top-0 z-50 flex w-full flex-col items-center justify-between gap-6 bg-[#b8b8b8] px-8 py-3 shadow-sm lg:flex-row lg:gap-0"
>
	<div class="flex w-full items-center justify-between px-4 lg:w-fit">
		<p class="flex cursor-none items-center font-baskervville-serif text-4xl text-[#6e6e6e]">
			S<span class="text-lg">&</span>J
		</p>
		<button
			class="text-white lg:hidden"
			onclick={() => {
				open = !open;
			}}><AlignJustifyIcon /></button
		>
	</div>
	<nav class="hidden items-center gap-2 text-base font-semibold text-white lg:flex">
		<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">NOS CASAMOS</a>
		<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">CUÁNDO Y DONDE</a>
		<a href="#galery" class="px-2 py-2 transition-colors hover:text-white/80">GALERÍA</a>
		<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">REGALOS</a>
		<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">CONFIRMACIÓN</a>
	</nav>

	{#if open}
		<nav
			class="flex flex-col items-center gap-2 text-base font-semibold text-white lg:hidden"
			in:slide
			out:slide
		>
			<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">NOS CASAMOS</a>
			<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">CUÁNDO Y DONDE</a>
			<a href="#galery" class="px-2 py-2 transition-colors hover:text-white/80">GALERÍA</a>
			<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">REGALOS</a>
			<a href="#" class="px-2 py-2 transition-colors hover:text-white/80">CONFIRMACIÓN</a>
		</nav>
	{/if}
</header>
