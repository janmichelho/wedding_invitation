<script lang="ts">
	import { fade, fly } from "svelte/transition";

</script>

<div class="w-full">
	<div class="relative h-svh">
		<img src="/images/mw-env-top-layer.avif" class="absolute top-0 z-20 opacity-50" alt="" transition:fly={{duration: 1000, y: -100 }}/>
		<img
			src="/images/mw-env-middle-layer.avif"
			class="absolute z-0 h-full w-full opacity-50 hidden lg:block"
			alt=""
			out:fade={{duration: 150}}
		/>
		<img src="/images/mw-env-bottom-layer.avif" class="absolute bottom-0 z-10 opacity-50" alt="" transition:fly={{duration: 1000, y: 100 }}/>
		<div
			class="absolute left-1/2 top-1/2 z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5"
			out:fade={{duration: 200}}
		>
			<div class="flex flex-col gap-4 items-center justify-center">
				<p class="font-baskervville-serif text-[2rem] uppercase text-gray-900">Sara & Jan</p>
				<p class="text-center font-baskervville-serif text-gray-900">
					Nos casamos y te invitamos a<br />celebrarlo.
				</p>
			</div>
            <a href="/details" class="p-2">
                <img src="/images/sello.avif" alt="" class="animate-scale h-24 w-24 brightness-[0.8]" />
            </a>
		</div>
	</div>
</div>
