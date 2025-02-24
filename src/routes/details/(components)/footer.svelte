<script lang="ts">
	import ArrowUpIcon from 'lucide-svelte/icons/arrow-up';

	const confirmationLink =
		'https://docs.google.com/forms/d/e/1FAIpQLSdRVDuiabr7yBtIELDfXZlxE-waDPs4orFsdyKugo6IfRx0tw/viewform?usp=header';
</script>

<footer class="relative flex h-64 w-full flex-col items-center justify-center bg-[#a2998a]">
	<a href="#principal" class="group absolute -top-4 rounded-full border bg-white p-2 text-gray-600"
		><ArrowUpIcon class="animate-bounce group-hover:animate-none" /></a
	>
	<a
		id="confirmacion"
		href={confirmationLink}
		target="_blank"
		rel="noopener noreferrer"
		class="rounded-lg border-gray-400 bg-[#d3cac3] px-6 py-4 transition-all hover:border-2 hover:px-10 hover:shadow-sm"
		>Confirma tu asistencia</a
	>
</footer>
