<script lang="ts">
	import { onMount } from "svelte";
	import { weddingDayDate } from "$lib/constant";

    let days = $state(0)
    let hours = $state(0)
    let minutes = $state(0)
    let seconds = $state(0)

    onMount(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const timeLeft = weddingDayDate.getTime() - now
            if (timeLeft < 0) {
                clearInterval(interval)
                return
            }

            days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    })
</script>

<div class="flex items-center justify-center gap-2 lg:gap-4 font-baskervville-serif mt-4">
	<div class="flex flex-col items-center justify-center gap-2">
		<span class=" text-xl lg:text-2xl">{days}</span>
		<p class="py-2 px-3 lg:px-4 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm font-medium">DÍAS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class=" text-xl lg:text-2xl">{hours}</span>
		<p class="py-2 px-3 lg:px-4 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm font-medium">HORAS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class=" text-xl lg:text-2xl">{minutes}</span>
		<p class="py-2 px-3 lg:px-4 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm font-medium">MINS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class=" text-xl lg:text-2xl">{seconds}</span>
		<p class="py-2 px-3 lg:px-4 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm font-medium">SEGS</p>
	</div>
</div>
