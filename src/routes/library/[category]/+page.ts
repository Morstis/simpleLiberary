import { data } from '$lib/data.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const category = params.category;
	const books = data[category];
	if (!books) throw error(404, 'Diese Kategorie existiert nicht');
	return { books, category };
}
