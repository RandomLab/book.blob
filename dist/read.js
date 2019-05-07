"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Read {
    constructor(pathToFolder) {
        this.pathToFolder = pathToFolder;
        this.srcFolder = path.join(__dirname, this.pathToFolder);
        this.readFolder();
    }
    readFolder() {
        const one = new Promise((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                const result = [];
                for (const file of items) {
                    const text = fs.readFileSync(this.srcFolder + file, 'utf8');
                    result.push(text);
                }
                resolve(result);
            });
        });
        return one;
    }
}
exports.default = Read;
//# sourceMappingURL=read.js.map