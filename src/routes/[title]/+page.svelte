<script lang="ts">
	import Slides from '$lib/deck/slides.svelte'
	import '../../app.postcss'

	export let data: import('./$types').PageData;
</script>

<svelte:head>
	<title>Presentation</title>
</svelte:head>

<Slides title={data.title}/>
