import {test, describe} from '@jest/globals';
import request from 'supertest';
import app from '../src/app';
import {loadMovies} from '../src/movies';

const moviesData = await loadMovies();

describe.each(moviesData)('film page shows title of movie', (movie) => {
	test('should display correct title', async () => {
		const response = await request(app)
			.get(`/movies/${movie.id}`)
			.expect('Content-Type', 'text/html; charset=utf-8')
			.expect(200);

		expect(response.text).toMatch(`${movie.attributes.title}`);
	});
});
