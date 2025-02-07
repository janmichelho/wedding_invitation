<script lang="ts">
	let { alt, caption, src }: { src: string; alt: string; caption: string } = $props();
</script>

<li class="transition-transform duration-500 odd:rotate-2 even:-rotate-2 hover:rotate-0 hover:scale-150 focus:rotate-0 focus:scale-150">
	<div
		class="flex cursor-pointer flex-col items-center gap-2 rounded-sm bg-gray-50 px-2 pb-4 pt-2 shadow-md"
	>
		<img
			{src}
			alt="Postal"
			class="h-auto w-52 border grayscale transition-all duration-300 hover:grayscale-0 focus:grayscale-0"
		/>
		<p class="text-xl">{caption}</p>
	</div>
</li>
