import express from 'express';
import expressHandlebars from 'express-handlebars';

const app = express();

app.use('/static', express.static('./statitc'));

app.listen(3080);
