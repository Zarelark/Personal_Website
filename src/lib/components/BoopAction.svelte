<!--from: https://svelte.dev/repl/bcccd7a1f43e41a4b824d6f50efe33a6?version=3.48.0-->
<script>
	import boop from './boop.js';
	export let boopParams;
	let isBooped = false;
	
	// Is there a more Svelte-y way to do this?
	function setIsBooped(val) {
		isBooped = val;
	}
	
	function triggerBoop() {
		isBooped = true;
	}
</script>

<!-- trigger onclick so demo works on mobile -->
<div on:mouseenter={triggerBoop} on:click={triggerBoop}  use:boop={{isBooped, ...boopParams, setter: setIsBooped}}>
	<slot/>
</div>

<style>
    div{
        width: 100%;
    }
</style>