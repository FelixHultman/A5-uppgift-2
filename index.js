import express from 'express';
import {engine} from 'express-handlebars';
import fs from 'fs/promises';

const app = express();
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/static', express.static('./statitc'));

app.listen(3080);
