"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class GetData {
    constructor(pathToFolder) {
        this.pathToFolder = pathToFolder;
        this.srcFolder = path.join(__dirname, this.pathToFolder);
    }
    readMainFolder() {
        const one = new Promise((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                resolve(items);
            });
        });
        return one;
    }
}
exports.default = GetData;
//# sourceMappingURL=getData.js.map