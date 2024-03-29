import express from 'express';
import {engine} from 'express-handlebars';
import {loadMovie, loadMovies} from './movies.js';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.get('/', async (req, res) => {
	const movies = await loadMovies();
	res.render('start', {
		movies,
		title: 'Välkommen',
		headerTitle: 'Våra filmer!',
	});
});

app.get('/movies/:movieId', async (req, res) => {
	const movie = await loadMovie(req.params.movieId);
	res.render('content', {
		movie,
		title: 'Välkommen',
		headerTitle: 'Filmen du valde',
	});
});

app.use('/static', express.static('./static'));

export default app;
