"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
class Html {
    constructor(chapitres) {
        this.chapitres = chapitres;
        this.showdown = require('showdown');
        this.converter = new this.showdown.Converter();
        this.chapitres = chapitres;
        this.converter.setOption('noHeaderId', 'true');
        this.srcFolder = path.join(__dirname + '../../sources/');
    }
    page() {
        const head = this.head();
        const cover = this.cover();
        const toc = this.toc();
        const introduction = this.introduction();
        const body = this.body();
        const result = head.concat(cover + toc + introduction + body + '</body>');
        return result;
    }
    body() {
        const result = [];
        let i = 1;
        for (const c of this.chapitres) {
            const chapitre = this.chapitreId(c);
            let section = `<section id="${chapitre}" class="chapter" data-chapter="${i}">`;
            const html = this.converter.makeHtml(c);
            section = section.concat(html);
            section = section.concat(`</section>`);
            result.push(section);
            i = i + 1;
        }
        const body = result.join('\n');
        return body;
    }
    chapitreName(name) {
        try {
            const re = /(^#\s[a-zA-Z0-9\s]+\n)/gi;
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
    chapitreId(name) {
        try {
            const chapitre = this.chapitreName(name);
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
    head() {
        const head = fs.readFileSync(this.srcFolder + 'head.html', 'utf8');
        return head;
    }
    cover() {
        const cover = fs.readFileSync(this.srcFolder + 'cover.html', 'utf8');
        return cover;
    }
    toc() {
        const introduction = fs.readFileSync(this.srcFolder + 'introduction.md', 'utf8');
        const introductionName = this.chapitreName(introduction);
        const introductionId = this.chapitreId(introduction);
        const introductionToc = `<li id="toc-${introductionId}">
        <a href="#${introductionId}">${introductionName}</a></li>`;
        const liste = [];
        for (const c of this.chapitres) {
            const chapitreId = this.chapitreId(c);
            const chapitre = `<li class="chap"><a href="#${chapitreId}">${this.chapitreName(c)}</a></li>`;
            liste.push(chapitre);
        }
        const section = `<section id="toc"><ul>${introductionToc} ${liste.join('')}</ul></section>`;
        return section;
    }
    introduction() {
        let introduction = fs.readFileSync(this.srcFolder + 'introduction.md', 'utf8');
        introduction = this.converter.makeHtml(introduction);
        const result = '<section id="introduction">' + introduction + '</section>';
        return result;
    }
}
exports.default = Html;
//# sourceMappingURL=html.js.map