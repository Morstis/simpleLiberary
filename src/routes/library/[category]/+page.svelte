<script lang="ts">
	export let data;
</script>

<h1 class="headline">{data.category}</h1>
<section>
	<table>
		<tr>
			<th>Nr.</th>
			<th>Autor</th>
			<th>Titel</th>
			<th>Für</th>
			<th>Sonstiges</th>
		</tr>
		{#each data.books as book}
			<tr>
				<td>{book.nr}</td>
				<td>{book.autor}</td>
				<td>{book.titel}</td>
				<td>{book.für}</td>
				<td>{book.sonstiges}</td>
			</tr>
		{/each}
	</table>
</section>

<style>
	section {
		margin-top: 1em;
		height: 100%;
		overflow: auto;
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
		top: 0;
		box-shadow: 0 2px 2px -1px rgba(0, 0, 0, 0.4);
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
