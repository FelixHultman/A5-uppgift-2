import {test} from '@jest/globals';
import request from 'supertest';
import {app} from '..';

Test('encanto page shows title of movie', () => {
	request(app).get('/movies/2').expect(200);
});
