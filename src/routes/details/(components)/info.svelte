<script lang="ts">
	import { googleCalendarLink, googleMapsLink, stdCalendarLink, wazeLink } from '$lib/constant';
	import Dress from '$lib/icons/dress.svelte';
	import Rings from '$lib/icons/rings.svelte';
</script>

<section class="flex flex-col items-center justify-center gap-6 mt-12">
	<Rings class="animate-scale w-12 fill-[#a2998a]" />
	<h3 class="text-2xl font-semibold">Celebración</h3>
	<div class="flex flex-col items-center gap-4">
		<p class="text-lg">5 de julio</p>
		<p><time datetime="2025-0">as</time></p>
		<p>19:00 pm - 0:00 am</p>
		<p>Villa Lombao</p>
		<p>Calle Castaño 46, Majadahonda</p>
	</div>

	<a href={googleMapsLink} aria-label="Google Maps"></a>
	<a href={wazeLink} aria-label="Waze Maps"></a>

	<Dress class="animate-scale w-12 fill-[#a2998a]" />
	<h3>Código de vestimenta</h3>
	<p>Semiformal</p>
	<p>Es una celebración... sólo asegurate de venir listo para divertirte</p>

	<h3>Agrégalo a tu calendario</h3>
	<a href={stdCalendarLink} aria-label="Calendario estandar"></a>
	<a href={googleCalendarLink} aria-label="Calendario de google"></a>
</section>
