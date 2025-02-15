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

<div class="flex items-center justify-center gap-4 lg:gap-8 font-baskervville-serif mt-4 font-medium">
	<div class="flex flex-col items-center justify-center gap-2">
		<span class="text-xl lg:text-2xl">{days}</span>
		<p class="py-2 px-4 lg:px-10 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm">DÍAS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class="text-xl lg:text-2xl">{hours}</span>
		<p class="py-2 px-4 lg:px-10 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm">HORAS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class="text-xl lg:text-2xl">{minutes}</span>
		<p class="py-2 px-4 lg:px-10 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm">MINS</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-2">
		<span class="text-xl lg:text-2xl">{seconds}</span>
		<p class="py-2 px-4 lg:px-10 text-center bg-[#d3cac3] rounded-md text-xs lg:text-sm">SEGS</p>
	</div>
</div>
