import express from 'express';
import {engine} from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

response.render();

app.use('/static', express.static('./statitc'));

app.listen(5080);
