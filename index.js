import express from 'express';
import {engine} from 'express-handlebars';

const app = express();

app.use('/static', express.static('./statitc'));

app.listen(3080);
