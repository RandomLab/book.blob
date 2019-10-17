"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeTextes {
    constructor(text, chapNum, fileNum) {
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
        /* make textes from file listing, convert md to html */
        this.showdown = require('showdown');
        this.converter = new this.showdown.Converter({ headerLevelStart: 2,
            noHeaderId: true });
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
    }
    textesBody() {
        try {
            const indexArticle = this.chapNum + '.' + this.fileNum + ' ';
            const chapitre = this.textId(this.text);
            let section = `<section id="${chapitre}" class="subchapter">`;
            const html = this.converter.makeHtml(this.text);
            let test = this.insertNum(html, indexArticle);
            section = section.concat(test);
            section = section.concat(`</section>`);
            return section;
        }
        catch (e) {
            console.log(e);
        }
    }
    insertNum(main, ins) {
        return main.slice(0, 4) + ins + main.slice(4);
    }
    textName(name) {
        try {
            const re = /.*/m;
            const str = name.match(re);
            const parsedName = str[0].slice(2);
            if (parsedName) {
                return parsedName.trim();
            }
        }
        catch (e) {
            console.log(e);
        }
    }
    textId(name) {
        try {
            const chapitre = this.textName(name);
            const re = /(\s)/gi;
            const str = chapitre.replace(re, '-').toLowerCase();
            if (str) {
                return str;
            }
            else {
                return name;
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}
exports.default = MakeTextes;
//# sourceMappingURL=makeTextes.js.map