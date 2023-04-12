<script lang="ts">
	import { data } from '$lib/data';

	const cats = Object.keys(data);
</script>

<h1 class="headline">Kategorien</h1>

<section>
	{#each cats as category}
		<a href="/library/{encodeURIComponent(category)}">
			<h1>
				{category}
			</h1></a
		>
	{/each}
</section>

<style lang="scss">
	section {
		margin-top: 1em;
		height: 100%;
		overflow: auto;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
		gap: 1em;

		a {
			text-decoration: none;
			background-color: var(--accent);
			padding: 1em;
			display: flex;
			width: 100%;
			height: 15rem;
			border-radius: 10px;
			h1 {
				color: var(--main);
				margin: auto;
			}
		}
	}
</style>
