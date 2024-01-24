/* import {test} from '@jest/globals';
import request from 'supertest';
import app from '../src/app';
import {loadMovies} from '../src/movies.js';

test('film page shows title of movie', async () => {
	const movies = await loadMovies();

	for (const movie of movies) {
		const movieTest = await request(app)
			.get('/movies/${movie.attributes.id}')
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
		expect(movieTest.text).toMatch(`${movie.attributes.title}`);
	}
});
 */

import {test, describe} from '@jest/globals';
import request from 'supertest';
import app from '../src/app';
import {loadMovies} from '../src/movies'; // Importera loadMovies-funktionen från din applikation

// Hämta filmdata från API:et
const moviesData = await loadMovies();

// För varje film, skapa ett test
describe.each(moviesData)('film page shows title of movie', (movie) => {
	test('should display correct title', async () => {
		const response = await request(app)
			.get(`/movies/${movie.id}`)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);
		console.log(`Response for movie "${movie.attributes.title}":`);

		// Använd variabeln movie för att jämföra med den faktiska titeln på sidan
		console.log(`Expected title: ${movie.attributes.title}`);

		// Använd variabeln movie för att jämföra med den faktiska titeln på sidan
		expect(response.text).toMatch(`${movie.attributes.title}`);
	});
});
