<script lang="ts">
	import GuitarIcon from 'lucide-svelte/icons/guitar';

	let isPlaying = true;
	let audio: HTMLAudioElement;

	const toggleAudio = () => {
		if (isPlaying) {
			audio.pause();
		} else {
			audio.play();
		}
		isPlaying = !isPlaying;
	};
</script>

<button
	class="fixed bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full border bg-[#a2998a]"
	onclick={toggleAudio}
>
	{#if isPlaying}
		<GuitarIcon class="w-6 text-white" />
	{:else}
		<GuitarIcon class="w-6 text-white/45" />
	{/if}
</button>

<audio bind:this={audio} autoplay loop>
	<source src="/audio/audio_background.mp3" type="audio/mpeg" />
</audio>
