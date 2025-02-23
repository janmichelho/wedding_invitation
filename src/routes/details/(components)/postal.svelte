<script lang="ts">
	import { Dialog, DialogTrigger } from '$lib/ui/shadcn/dialog';
	import DialogContent from '$lib/ui/shadcn/dialog/dialog-content.svelte';
	import { cn } from '$lib/utils';

	let { alt, caption, src }: { src: string; alt: string; caption: string } = $props();

	let openDialog = $state(false);
</script>

<li
	class={cn(
		'transition-all duration-300 ease-in-out hover:rotate-0',
		openDialog ? 'rotate-0' : 'odd:rotate-2 even:-rotate-2'
	)}
>
	<Dialog bind:open={openDialog}>
		<DialogTrigger>
			{#snippet child({ props })}
				<button
					class="flex cursor-pointer flex-col items-center gap-2 rounded-sm bg-gray-50 px-2 pb-4 pt-2 shadow-md"
					{...props}
				>
					<img
						{src}
						alt="Postal"
						loading="lazy"
						decoding="async"
						class="h-auto w-52 border contrast-75 transition-all duration-300 hover:contrast-100 focus:contrast-100"
					/>
					<p class="text-xl">{caption}</p>
				</button>
			{/snippet}
		</DialogTrigger>
		<DialogContent class="flex flex-col items-center max-w-4xl p-2 pb-4 gap-2 rounded-md">
			<img
				{src}
				alt="Postal"
				loading="lazy"
				decoding="async"
				class="h-auto border rounded-sm"
			/>
			<p class="text-2xl">{caption}</p>
		</DialogContent>
	</Dialog>
</li>
