import * as fs from 'fs';
import * as path from 'path';
import app from './app';
import Html from './html';
import ReadData from './readData';
import GetData from './getData';
import MakeChapitres from './makeChapitres';

/* merge all html to index and serve it */

const port = 8000;
const folders = new GetData('../sources/data');
let chapNum = 0;

folders.readMainFolder().then((items) => {

    for (const item of items) {
        chapNum++;
        const chapitres = new MakeChapitres(item, chapNum);
        const result = chapitres.chapitresBody();
        const data = new ReadData(`../sources/data/${item}/`, chapNum);
        const html = new Html(items);
        data.readFolder().then((text) => {
            fs.writeFile(path.join(__dirname + `../../sources/chapitres/${item}.html`), result + text, (err) => {
                if (err) {
                    console.error(err);
                }
                fs.writeFileSync(path.join(__dirname, 'index.html'), html.page());
            });
        }).catch((err) => {
            console.log(err);
        });
    }

}).catch((err) => {
    console.log(err);
});


app.listen(port, () => {
    console.log('express server listen ' + port);
});
