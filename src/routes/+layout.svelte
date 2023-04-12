<script lang="ts">
	import '../app.scss';
	import BottomNav from '$lib/bottomNav.svelte';
</script>

<main>
	<slot />
</main>
<BottomNav />

<style lang="scss">
	main {
		height: 100%;
		width: 100%;
	}
</style>
