import * as fs from 'fs';
import * as path from 'path';
import app from './app';
import Html from './html';
import Read from './read';
import { rejects } from 'assert';

const port = 3000;

const chapitres = new Read('../sources/chapitres/');

chapitres.readFolder().then((chapitres) => {
    const html = new Html(chapitres);
    fs.writeFileSync(path.join(__dirname, 'index.html'), html.page());
}).catch((err) => {
    console.log(err);
});

app.listen(port, () => {
    console.log('express server listen ' + port);
});