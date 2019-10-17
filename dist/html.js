"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Html {
    constructor(chapitres) {
        this.chapitres = chapitres;
        /* convert all md to html and build html */
        this.showdown = require('showdown');
        this.converter = new this.showdown.Converter();
        this.chapitres = chapitres;
        this.converter.setOption('noHeaderId', 'true');
        this.converter.setFlavor('github');
        this.srcFolder = path.join(__dirname + '../../sources/');
    }
    page() {
        const head = this.head();
        const cover = this.cover();
        const toc = this.toc();
        const introduction = this.introduction();
        const body = this.body();
        const colophon = this.colophon();
        const result = head.concat(cover + toc + introduction + body + colophon + '</body>');
        return result;
    }
    chapitresHtml() {
        const result = [];
        for (const c of this.chapitres) {
            const html = fs.readFileSync(this.srcFolder + `chapitres/${c}.html`, 'utf8');
            result.push(html);
        }
        const data = result.join('\n');
        return data;
    }
    body() {
        const body = this.chapitresHtml();
        return body;
    }
    getName(name) {
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
    getId(name) {
        try {
            const newName = this.getName(name);
            const re = /(\s)/gi;
            const str = newName.replace(re, '-').toLowerCase();
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
    getChapitreName(name) {
        const re = /".*?"/g;
        const data = name.match(re);
        return data;
    }
    makeTitle(data, separator) {
        const re = /"/g;
        const str = data.join(separator).replace(re, '');
        return str;
    }
    head() {
        const head = fs.readFileSync(this.srcFolder + 'head.html', 'utf8');
        return head;
    }
    cover() {
        const cover = fs.readFileSync(this.srcFolder + 'cover.html', 'utf8');
        return cover;
    }
    colophon() {
        const colophon = fs.readFileSync(this.srcFolder + 'colophon.html', 'utf8');
        return colophon;
    }
    toc() {
        const introduction = fs.readFileSync(this.srcFolder + 'request-for-comments.md', 'utf8');
        const introductionName = this.getName(introduction);
        const introductionId = this.getId(introduction);
        const introductionToc = `<li id="toc-${introductionId}">
        <a href="#${introductionId}">${introductionName}</a></li>`;
        const liste = [];
        for (const c of this.chapitres) {
            const name = this.getChapitreName(c);
            const title = this.makeTitle(name, ', ');
            const id = this.makeTitle(name, '-');
            const chapitre = `<li class="chap"><a href="#${id}">${title}</a></li>`;
            liste.push(chapitre);
        }
        const section = `<section id="toc"><ul>${introductionToc} ${liste.join('')}</ul></section>`;
        return section;
    }
    introduction() {
        let introduction = fs.readFileSync(this.srcFolder + 'request-for-comments.md', 'utf8');
        introduction = this.converter.makeHtml(introduction);
        const result = '<section id="request-for-comments">' + introduction + '</section>';
        return result;
    }
}
exports.default = Html;
//# sourceMappingURL=html.js.map