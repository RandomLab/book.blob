import * as fs from 'fs';
import * as path from 'path';
import app from './app';
import Html from './html';
import ReadData from './readData';
import GetData from './getData';
import MakeChapitres from './makeChapitres';
import CleanFiles from './cleanFiles';

/* merge all html to index and serve it */

const chapitresPath = '../sources/chapitres';
const port = 8000;
const folders = new GetData('../sources/data');
const devChapitresFiles = new CleanFiles(chapitresPath);
let chapNum = 0;

devChapitresFiles.readMainFolder().then((items) => {
    
    for (const item of items) {
        try {
            fs.unlink(path.resolve(__dirname, `${chapitresPath}/${item}`), (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log(`file ${item} removed`);
            });
        } catch(err) {  
            console.error(err);
        }
    }

}).catch((err) => {
    console.error(err);
});


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
                console.log('all files writed!');
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
