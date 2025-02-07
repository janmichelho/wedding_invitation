<script lang="ts">
	import Audio from './(components)/audio.svelte';
	import Contador from './(components)/contador.svelte';
	import Footer from './(components)/footer.svelte';
	import Galeria from './(components)/galeria.svelte';
	import Header from './(components)/header.svelte';
	import Info from './(components)/info.svelte';
	import Itinerario from './(components)/itinerario.svelte';
</script>

<main class="relative w-full">
	<div class="grid h-svh grid-cols-1 grid-rows-3" id="principal">
		<img src="/images/marco.avif" alt="" class="w-fit self-start justify-self-center" />
		<div class="flex flex-col items-center gap-4 self-center">
			<h1 class="font-baskervville-serif text-5xl text-[#a2998a]">Sara & Jan</h1>
			<h2 class="font-baskervville-serif text-2xl font-semibold">5 de julio de 2025</h2>
			<Contador />
		</div>
	</div>

	<Header />

	<section class="mt-12 flex flex-col items-center gap-12 px-2">
		<div class="flex flex-col items-center gap-3">
			<p class="text-2xl">Sara & Jan</p>
			<blockquote class="p-2 text-center font-ooohbaby-serif text-xl">
				"Amar no es mirarse el uno al otro; es mirar juntos en la misma dirección"
			</blockquote>
		</div>

		<div class="flex w-11/12 flex-col gap-4 bg-[#d3cac3] p-8 text-center md:p-12 lg:p-20">
			<h3 class="text-3xl">HISTORIA DE DOS COMETAS</h3>
			<p class="mb-6 italic">(cualquier semejanza con la realidad es pura coincidencia)</p>
			<p class="mb-2">
				En el vasto espacio de la existencia, dos viajeros solitarios surcaban sus propias órbitas,
				arrastrando consigo fragmentos de historias pasadas y el polvo estelar de sus recuerdos. Sus
				trayectorias eran inciertas, moldeadas por fuerzas invisibles, hasta que el destino — como
				la atracción silenciosa entre cuerpos errantes — los llevó a cruzar caminos.
			</p>
			<p class="mb-2">
				Al principio, se rozaron con cautela, midiendo distancias, temerosos de un choque que los
				fragmentara en pedazos dispersos. Pero su encuentro no fue una colisión violenta, sino un
				suave acoplamiento, una danza celeste en la que sus fuerzas se equilibraron. Poco a poco,
				dejaron de ser dos entidades aisladas y comenzaron a girar en torno a un mismo centro,
				encontrando estabilidad en la presencia del otro.
			</p>
			<p class="mb-2">
				Y así fue que un día notaron que sus trayectorias se habían alineado para viajar juntos. Sus
				caminos, antes independientes, ahora siguen una misma ruta, impulsados por la atracción
				mutua que los mantiene en equilibrio. Seguramente habrá momentos de calma y otros muchos de
				turbulencias, pero se han propuesto seguir avanzando, ajustando su rumbo cuando sea
				necesario, siempre acompañándose en ese trayecto que llamamos vida.
			</p>
		</div>
	</section>

	<Info />

	<Itinerario />

	<Galeria />

	<Footer />

</main>

<Audio/>
