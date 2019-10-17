"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const makeTextes_1 = require("./makeTextes");
class ReadData {
    constructor(pathToFolder, chapNum) {
        this.pathToFolder = pathToFolder;
        this.chapNum = chapNum;
        this.srcFolder = path.join(__dirname, this.pathToFolder);
        this.chapNum = chapNum;
        this.readFolder();
    }
    readFolder() {
        const one = new Promise((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                const result = [];
                let fileNum = 0;
                for (const file of items) {
                    fileNum++;
                    const text = fs.readFileSync(this.srcFolder + file, 'utf8');
                    const md2html = new makeTextes_1.default(text, this.chapNum, fileNum);
                    result.push(md2html.textesBody());
                }
                resolve(result.join('\n'));
            });
        });
        return one;
    }
}
exports.default = ReadData;
//# sourceMappingURL=readData.js.map