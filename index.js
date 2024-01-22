import express from 'express';
import fs from 'fs/promises';

const app = express();

app.use('/static', express.static('./statitc'));

app.listen(3080);
