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
		padding: 1em;
		padding-bottom: 120px;
		display: flex;
		flex-direction: column;
	}
</style>
