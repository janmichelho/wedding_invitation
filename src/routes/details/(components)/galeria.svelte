<script lang="ts">
	import { gallery } from "$lib/constant";
	import Postal from "./postal.svelte";
</script>

<section class="my-6 flex w-full flex-col items-center" id="galery">
	<ul
		class="flex w-fit justify-center gap-16 flex-wrap p-16"
	>
		{#each gallery as photo}
			<Postal {...photo} />
		{/each}
	</ul>
</section>