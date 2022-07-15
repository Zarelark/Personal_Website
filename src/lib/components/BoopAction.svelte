<!--from: https://svelte.dev/repl/bcccd7a1f43e41a4b824d6f50efe33a6?version=3.48.0-->
<script>
	import boop from './boop.js';
	export let boopParams;
	let isBooped = false;
	
	function triggerBoop() {
		isBooped = !isBooped;
	}
</script>

<!-- trigger onclick so demo works on mobile -->
<div on:mouseenter={triggerBoop} on:mouseleave={triggerBoop}  use:boop={{isBooped, ...boopParams}}>
	<slot/>
</div>

<style>
    div{
        width: 100%;
    }
</style>