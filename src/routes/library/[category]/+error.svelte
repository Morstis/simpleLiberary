<script>
	import { page } from '$app/stores';
</script>

<div>
	<h1>{$page.status}</h1>
	<h2>{$page?.error?.message}</h2>
</div>

<style lang="scss">
	div {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 80%;
		color: var(--error);
		h1 {
			font-size: 6em;
		}
	}
</style>
