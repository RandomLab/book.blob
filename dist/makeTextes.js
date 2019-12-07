"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeTextes {
    constructor(text, chapNum, fileNum) {
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
        /* make textes from file listing, convert md to html */
        this.footnote = function () {
            var footnote1 = {
                type: 'lang',
                regex: /\[\^([A-Za-z0-9]+)\]: (.*)/g,
                replace: "<div class='note' id='note_$1'>$1 $2</div>"
            };
            var footnote2 = {
                type: 'lang',
                regex: /\[\^([A-Za-z0-9]+)\]([^:])/g,
                replace: "<a class='note_call' href='#note_$1'>$1</a>$2"
            };
            return [footnote1, footnote2];
        };
        this.showdown = require('showdown');
        this.converter = new this.showdown.Converter({ headerLevelStart: 2,
            metadata: true,
            extensions: [this.footnote],
            noHeaderId: true });
        this.metadata = {};
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
    }
    textesBody() {
        try {
            const indexArticle = this.chapNum + '.' + this.fileNum + ' ';
            const html = this.converter.makeHtml(this.text);
            const metadata = this.converter.getMetadata();
            console.log(metadata);
            const chapitre = this.textId(metadata.title);
            let section = `<section id="${chapitre}" class="subchapter">`;
            let title = `<h2>${metadata.title}</h2>`;
            //let test = this.insertNum(html, indexArticle);
            //section = section.concat(test);
            section = section.concat(title);
            if (metadata.authors) {
                let authors = metadata.authors.split(",");
                for (let i = 0; i < authors.length; i++) {
                    let authorspan = `<span class="author dontHyphenate">${authors[i]}</span>`;
                    section = section.concat(authorspan);
                }
            }
            section = section.concat(html);
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
    textId(name) {
        try {
            const chapitre = name;
            //console.log(chapitre)
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