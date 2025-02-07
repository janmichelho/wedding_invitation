<script lang="ts">
	import ArrowUpIcon from 'lucide-svelte/icons/arrow-up';

	const confirmationLink =
		'https://docs.google.com/forms/d/e/1FAIpQLSdRVDuiabr7yBtIELDfXZlxE-waDPs4orFsdyKugo6IfRx0tw/viewform?usp=header';
</script>

<footer class="flex h-64 w-full flex-col items-center justify-center bg-[#a2998a] relative">
	<a href="#principal" class="rounded-full bg-white p-2 text-gray-600 -top-4 absolute border group"><ArrowUpIcon class="animate-bounce group-hover:animate-none"/></a>
	<a
		href={confirmationLink}
		class="rounded-lg border-gray-400 bg-[#d3cac3] px-6 py-4 transition-all hover:border-2 hover:px-10 hover:shadow-sm"
		>Confirma tu asistencia</a
	>
</footer>