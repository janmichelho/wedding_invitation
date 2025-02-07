<script lang="ts">
	import { itinerary } from '$lib/constant';
	import ClockIcon from 'lucide-svelte/icons/clock';
	import HeartIcon from 'lucide-svelte/icons/heart';
</script>

<section class="flex flex-col items-center gap-10">
	<div class="flex gap-6 justify-center items-center">
		<ClockIcon size=32/>
		<h3 class="text-4xl">Itinerario</h3>
	</div>
	<ul class="relative flex flex-col items-center gap-4 md:gap-0">
		<div class="absolute left-1/2 top-0 h-full border border-[#d3cac3] hidden md:block"></div>
		{#each itinerary as event, index}
			{@const isPar = index % 2 == 0}
			<li class="grid h-fit p-2 md:p-0 md:h-44 w-full grid-cols-2 items-center fill-yellow-800/15">
				{#if index % 2 == 1}
					<div class="justify-self-center md:justify-self-end md:pr-14">
						<svelte:component this={event.icon} class="w-24 fill-yellow-800/40" />
					</div>
				{/if}
				<div
					class="relative flex h-full w-full flex-col justify-center gap-2 pl-6 md:px-14 {index % 2 == 1
						? 'md:items-start'
						: 'items-end md:items-end'}  {index > 0 ? 'md:border-t-2 md:border-yellow-800/15' : ''}"
				>
                    {#if index != 0}
					    <HeartIcon class="absolute hidden md:block fill-yellow-900 text-yellow-800/60 w-4 {isPar ? '-right-[0.55rem] -top-[0.9rem]' : '-left-[0.4rem] -top-[0.9rem]'}" />
                    {/if}

					<p class="text-lg md:text-xl font-semibold text-yellow-800/80">{event.name}</p>
					<p class="text-sm md:text-base text-yellow-800/60">
						<time datetime={event.start.toISOString()}>
							{event.start.getHours().toString().padStart(2, '0')}:{event.start
								.getMinutes()
								.toString()
								.padStart(2, '0')}
						</time>
						-
						<time datetime={event.end.toISOString()}>
							{event.end.getHours().toString().padStart(2, '0')}:{event.end
								.getMinutes()
								.toString()
								.padStart(2, '0')}
						</time>
					</p>
					<p class="text-sm md:text-base text-yellow-800/70">{event.description}</p>
				</div>
				{#if index % 2 == 0}
					<div class="sm:justify-self-center md:justify-self-start pl-6 md:pl-14">
						<svelte:component this={event.icon} class="w-24 fill-yellow-800/40" />
					</div>
				{/if}
			</li>
		{/each}
	</ul>
</section>
