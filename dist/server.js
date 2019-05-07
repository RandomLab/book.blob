"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const app_1 = require("./app");
const html_1 = require("./html");
const read_1 = require("./read");
const port = 3000;
const chapitres = new read_1.default('../sources/chapitres/');
chapitres.readFolder().then((chapitres) => {
    const html = new html_1.default(chapitres);
    fs.writeFileSync(path.join(__dirname, 'index.html'), html.page());
}).catch((err) => {
    console.log(err);
});
app_1.default.listen(port, () => {
    console.log('express server listen ' + port);
});
//# sourceMappingURL=server.js.map