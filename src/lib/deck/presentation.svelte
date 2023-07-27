<script lang="ts">
	// import Slide from './slide.svelte'
	// import Code from './code.svelte'
	import {onMount} from 'svelte'
	import Markdown from './markdown.svelte'
	export let title:string;
	title = title || 'rat-trap.md'
	onMount(()=>{
		console.log(title)
	})
</script>

<!-- <Markdown name="Test.md" external /> -->
<!-- <Markdown name="Chem-o-RM.md" external /> -->
<Markdown name={title} external />
