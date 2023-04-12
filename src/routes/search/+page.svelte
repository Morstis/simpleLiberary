<script lang="ts">
	import type { Data } from '$lib/Data';
	import { data } from '$lib/data';

	let searchValue = '';

	let matches: Data = {};
	const search = () => {
		matches = {};
		for (const category in data) {
			const books = data[category];
			for (const book of books) {
				for (const attribute of Object.values(book)) {
					if (typeof attribute == 'number' && Number.parseInt(searchValue) === attribute) {
						matches[category] = [book, ...(matches[category] ?? [])];
					} else if (typeof attribute == 'string' && attribute.match(searchValue)) {
						matches[category] = [book, ...(matches[category] ?? [])];
					}
				}
			}
		}
		console.log(matches);
	};
</script>

<h1 class="headline">Suche</h1>

<section>
	<form id="search">
		<input type="text" placeholder="Suchen..." bind:value={searchValue} />
		<button on:click={search} type="submit">Suchen</button>
	</form>
	{#if Object.keys(matches).length > 0}
		<table>
			<tr>
				<th>Nr.</th>
				<th>Autor</th>
				<th>Titel</th>
				<th>Für</th>
				<th>Sonstiges</th>
			</tr>
			{#each Object.keys(matches) as key}
				<tr>
					<th colspan="5">{key}</th>
				</tr>
				{#each matches[key] as book}
					<tr>
						<td>{book.nr}</td>
						<td>{book.autor}</td>
						<td>{book.titel}</td>
						<td>{book.für}</td>
						<td>{book.sonstiges}</td>
					</tr>
				{/each}
			{/each}
		</table>
	{/if}
</section>

<style lang="scss">
	section {
		margin-top: 1em;
		height: 100%;
		overflow: auto;
	}
	#search {
		width: 100%;
		display: flex;
		gap: 1em;
		height: 4em;
		input {
			width: 100%;
			padding: 1em;
			outline: none;
			border: none;
			background-color: var(--accent);
			border-radius: 10px;
		}
		button {
			border: none;
			outline: none;
			background-color: var(--secondary);
			color: var(--secondaryText);
			padding: 1em 2em;
			font-weight: bold;
			border-radius: 10px;
		}
	}

	table {
		border-spacing: 2px 1em;
		position: relative;
		width: 100%;
	}
	th {
		background-color: var(--secondary);
		padding: 1.2em;
		color: var(--secondaryText);
		position: sticky;
		top: 80px;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
	}
	tr:first-child th {
		top: 0;
	}
	tr td:first-child,
	th:first-child {
		border-radius: 10px 0 0 10px;
	}

	tr td:last-child,
	th:last-child {
		border-radius: 0 10px 10px 0;
	}
	td {
		background-color: var(--accent);
		padding: 1em;
	}
</style>
