"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const app_1 = require("./app");
const html_1 = require("./html");
const readData_1 = require("./readData");
const getData_1 = require("./getData");
const makeChapitres_1 = require("./makeChapitres");
/* merge all html to index and serve it */
const port = 8000;
const folders = new getData_1.default('../sources/data');
let chapNum = 0;
folders.readMainFolder().then((items) => {
    for (const item of items) {
        chapNum++;
        const chapitres = new makeChapitres_1.default(item, chapNum);
        const result = chapitres.chapitresBody();
        const data = new readData_1.default(`../sources/data/${item}/`, chapNum);
        const html = new html_1.default(items);
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
app_1.default.listen(port, () => {
    console.log('express server listen ' + port);
});
//# sourceMappingURL=server.js.map