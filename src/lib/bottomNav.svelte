<script lang="ts">
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import IoSearchSharp from 'svelte-icons-pack/io/IoSearchSharp';
	import IoLibrary from 'svelte-icons-pack/io/IoLibrary';
</script>

<div id="nav">
	<a href="/search">
		<Icon src={IoSearchSharp} size="32" className="menuIcon" color="var(--secondaryText)" />
		<span>Suchen</span>
	</a>
	<a href="/library">
		<Icon src={IoLibrary} size="32" className="menuIcon" color="var(--secondaryText)" />
		<span>Bibliothek</span>
	</a>
</div>

<style lang="scss">
	#nav {
		display: flex;
		background-color: var(--secondary);
		padding: 1em;
		border-radius: 10px 10px 0 0;
		justify-content: space-around;
		bottom: 0;
		position: absolute;
		width: 100%;
		a {
			text-decoration: none;
			display: flex;
			flex-direction: column;
			span {
				color: var(--secondaryText);
			}
		}
	}
	:global(.menuIcon) {
		margin: auto;
	}
</style>
