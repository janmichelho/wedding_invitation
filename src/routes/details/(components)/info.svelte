<script lang="ts" module>
	const formatTime12 = (date: Date) => {
		let hours = date.getHours();
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const ampm = hours >= 12 ? 'pm' : 'am';
		hours = hours % 12;
		if (hours === 0) hours = 12; // Ajuste para la medianoche o mediodía
		return `${hours}:${minutes} ${ampm}`;
	};
</script>

<script lang="ts">
	import {
		googleCalendarLink,
		googleMapsLink,
		stdCalendarLink,
		wazeLink,
		itinerary,
		weddingDayDate
	} from '$lib/constant';
	import Calendar from '$lib/icons/calendar.svelte';
	import Dress from '$lib/icons/dress.svelte';
	import GoogleCalendar from '$lib/icons/google-calendar.svelte';
	import GoogleMapsIcon from '$lib/icons/google-maps.svelte';
	import Rings from '$lib/icons/rings.svelte';

	const start = itinerary[0].start;
	const end = itinerary[itinerary.length - 1].end;

	const opciones: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
	const fechaFormateada = new Intl.DateTimeFormat('es-ES', opciones).format(weddingDayDate);

	const horaDeInicio = formatTime12(start);
	const horaFin = formatTime12(end);
</script>

<section class="mb-12 mt-12 flex flex-col items-center justify-center gap-8 text-stone-700 px-2" id="evento">
	<div class="flex flex-col items-center justify-center gap-4">
		<Rings class="w-20 fill-[#a2998a] animate-scale" />
		<h3 class="text-3xl">Celebración</h3>
		<div class="flex flex-col items-center gap-4">
			<p class="text-xl font-semibold">
				<time datetime={weddingDayDate.toUTCString()}>{fechaFormateada}</time>
			</p>
			<p class="text-lg">
				<time datetime={horaDeInicio}>{horaDeInicio}</time> -
				<time datetime={horaFin}>{horaFin}</time>
			</p>
			<p class="text-center text-xl">Villa Lombao <br /> Calle Castaño 46, Majadahonda</p>
		</div>

		<div class="flex flex-col items-center justify-center gap-6 text-sm md:flex-row">
			<a
				href={googleMapsLink}
				aria-label="Google Maps"
				target="_blank"
				rel="noopener noreferrer"
				class="flex w-52 items-center justify-center gap-1 rounded-lg border border-gray-400 bg-zinc-100 py-2 transition-all hover:w-56 hover:scale-110 hover:shadow-sm"
				><GoogleMapsIcon class="h-5 w-5" />Ver mapa</a
			>
			<a
				href={wazeLink}
				aria-label="Waze Maps"
				target="_blank"
				rel="noopener noreferrer"
				class="flex w-52 items-center justify-center gap-3 rounded-lg border border-gray-400 bg-zinc-100 py-2 transition-all hover:w-56 hover:scale-110 hover:shadow-sm"
				><img src="/images/waze.png" alt="Waze icon" class="h-5 w-5" />Llegar con Waze</a
			>
		</div>
	</div>
	<div class="flex flex-col items-center justify-center gap-4">
		<Dress class="w-24 fill-[#a2998a] animate-scale" />
		<h3 class="text-2xl ">Código de vestimenta</h3>
		<p class="text-lg font-medium">Semiformal</p>
		<p class="text-center px-2">Es una celebración... sólo asegurate de venir listo para divertirte</p>
	</div>
	<div class="flex flex-col items-center justify-center gap-4">
		<h3 class="text-2xl ">Agrégalo a tu calendario</h3>
		<div class="flex flex-col items-center justify-center gap-6 md:flex-row">
			<a
				href={stdCalendarLink}
				aria-label="Calendario estandar"
				class="flex w-52 items-center justify-center gap-2 rounded-lg border border-gray-400 bg-zinc-100 px-2 py-2 transition-all hover:w-56 hover:scale-110 hover:shadow-sm"
				><Calendar class="h-4 w-4" />IOS o PC</a
			>
			<a
				href={googleCalendarLink}
				aria-label="Calendario de google"
				class="flex w-52 items-center justify-center gap-2 rounded-lg border border-gray-400 bg-zinc-100 px-2 py-2 transition-all hover:w-56 hover:scale-110 hover:shadow-sm"
				><GoogleCalendar class="h-5 w-5" /> Calendario de google</a
			>
		</div>
	</div>
</section>
