import * as fs from 'fs';
import * as path from 'path';

class Html {

    public showdown = require('showdown');
    public converter = new this.showdown.Converter();
    private srcFolder: string;

    constructor(private chapitres: string[]) {
        this.chapitres = chapitres;
        this.converter.setOption('noHeaderId', 'true');
        this.srcFolder = path.join(__dirname + '../../sources/');
    }

    public page(): string {
        const head: string = this.head();
        const cover: string = this.cover();
        const toc: string = this.toc();
        const introduction: string = this.introduction();
        const body: string = this.body();
        const result = head.concat(cover + toc + introduction + body + '</body>');
        return result;
    }

    private body(): string {
        const result: string[] = [];
        let i: number = 1;
        for (const c of this.chapitres) {
            const chapitre = this.chapitreId(c);
            let section = `<section id="${chapitre}" class="chapter" data-chapter="${i}">`;
            const html: string = this.converter.makeHtml(c);
            section = section.concat(html);
            section = section.concat(`</section>`);
            result.push(section);
            i = i + 1;
        }
        const body: string = result.join('\n');
        return body;
    }

    private chapitreName(name: string): string {
        try {
            const re = /(^#\s[a-zA-Z0-9\s]+\n)/gi;
            const str = name.match(re);
            const parsedName = str[0].slice(2);
            if (parsedName) {
                return parsedName.trim();
            }
        } catch (e) {
            console.log(e);
        }
    }

    private chapitreId(name: string): string {
        try {
            const chapitre = this.chapitreName(name);
            const re = /(\s)/gi;
            const str = chapitre.replace(re, '-').toLowerCase();
            if (str) {
                return str;
            } else {
                return name;
            }
        } catch (e) {
            console.log(e);
        }
    }

    private head(): string {
        const head: string = fs.readFileSync(this.srcFolder + 'head.html', 'utf8');
        return head;
    }

    private cover(): string {
        const cover: string = fs.readFileSync(this.srcFolder + 'cover.html', 'utf8');
        return cover;
    }

    private toc(): string {

        const introduction: string = fs.readFileSync(this.srcFolder + 'introduction.md', 'utf8');
        const introductionName = this.chapitreName(introduction);
        const introductionId = this.chapitreId(introduction);
        const introductionToc = `<li id="toc-${introductionId}">
        <a href="#${introductionId}">${introductionName}</a></li>`;

        const liste: string[] = [];

        for (const c of this.chapitres) {
            const chapitreId = this.chapitreId(c);
            const chapitre = `<li class="chap"><a href="#${chapitreId}">${this.chapitreName(c)}</a></li>`;
            liste.push(chapitre);
        }

        const section = `<section id="toc"><ul>${introductionToc} ${liste.join('')}</ul></section>`;
        return section;
    }

    private introduction(): string {
        let introduction: string = fs.readFileSync(this.srcFolder + 'introduction.md', 'utf8');
        introduction = this.converter.makeHtml(introduction);
        const result: string = '<section id="introduction">' + introduction + '</section>';
        return result;
    }
}

export default Html;
