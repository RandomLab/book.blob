import * as fs from 'fs';
import * as path from 'path';

class Html {

    private footnote = function () {
        var footnote1 = {
            type: 'lang',
            regex: /\[\^([A-Za-z0-9])+\]:(.*)/g,
            replace: "<div class='note' id='note_$1'>$2</div>"
        };
        var footnote2 = {
            type: 'lang',
            regex: /\[\^([A-Za-z0-9])+\][^:]/g,
            replace: "<a class='note_call' href='#note_$1'>$1</a>"
        };
        return [footnote1, footnote2];
    }

    /* convert all md to html and build html */

    public showdown = require('showdown');


    public converter = new this.showdown.Converter(
        { headerLevelStart : 2,
          metadata: true,
          strikethrough: true,
          extensions: [this.footnote],
          noHeaderId : true } ,
        );
    public metadata:object = {};
    private srcFolder: string;

    constructor(private chapitres: string[]) {
        this.chapitres = chapitres;
        this.converter.setOption('noHeaderId', 'true');
        this.converter.setFlavor('github');
        this.srcFolder = path.join(__dirname + '../../sources/');
    }

    public page(): string {
        const head: string = this.head();
        const cover: string = this.cover();
        const toc: string = this.toc();
        const introduction: string = this.introduction();
        const body: string = this.body();
        const colophon: string = this.colophon();
        const footer: string = this.footer();
        const result = head.concat(cover + toc + introduction + body + colophon + footer);
        return result;
    }

    private chapitresHtml(): string {
        const result: string[] = [];
        for (const c of this.chapitres) {
            const html: string = fs.readFileSync(this.srcFolder + `chapitres/${c}.html`, 'utf8');
            result.push(html);
        }
        const data: string = result.join('\n');
        return data;
    }

    private body(): string {
        const body: string = this.chapitresHtml();
        return body;
    }

    private getName(name: string): string {
        try {
            const re = /.*/m;
            const str = name.match(re);
            const parsedName = str[0].slice(2);
            if (parsedName) {
                return parsedName.trim();
            }
        } catch (e) {
            console.log(e);
        }
    }

    private getId(name: string): string {
        try {
            const newName = this.getName(name);
            const re = /(\s)/gi;
            const str = newName.replace(re, '-').toLowerCase();
            if (str) {
                return str;
            } else {
                return name;
            }
        } catch (e) {
            console.log(e);
        }
    }

    private getChapitreName(name: string): string[] {
        const re = /".*?"/g;
        const data = name.match(re);
        return data;
    }

    private makeTitle(data: string, separator: string): string {
        const htmldata = this.converter.makeHtml(data);
        const re1 = /<p>(.+)<\/p>/g;
        const re2 = /"/g;
        let str = htmldata.replace(re1,"$1")
        //str = str.join(separator).replace(re2, '');
        return str;
    }

    private textId(name: string): string {
        try {
            const chapitre = name;
            // console.log(chapitre)
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

    private colophon(): string {
        const colophon: string = fs.readFileSync(this.srcFolder + 'colophon.html', 'utf8');
        return colophon;
    }

    private footer(): string {
        const footer: string = fs.readFileSync(this.srcFolder + 'footer.html', 'utf8');
        return footer;
    }



    private getMetadataFromMd(folder: string): { title: string; authors: string; runningTitle: string } {
        const md: string = fs.readFileSync(this.srcFolder + 'data/' + folder + '/article.md', 'utf8');
        this.converter.makeHtml(md);
        const metadata = this.converter.getMetadata()
        return metadata;

    }

    private toc(): string {

        const introduction: string = fs.readFileSync(this.srcFolder + 'preface.md', 'utf8');
        const introductionName = this.getName(introduction);
        const introductionId = this.getId(introduction);
        const introductionToc = `<li id="toc-${introductionId}">
        <a href="#${introductionId}">${introductionName}</a></li>`;

        const liste: string[] = [];

        for (const c of this.chapitres) {
            const meta = this.getMetadataFromMd(c);
            // console.log(meta.title)
            const title = this.makeTitle(meta.title, ', ');
            const name = this.getChapitreName(meta.title);
            const id = this.textId(meta.title);

            const chapitre = `<li class="chap"><a href="#${id}">${title}</a></li>`;
            // const chapitre = `<li class="chap">test</a>`;
            liste.push(chapitre);
        }

        const section = `<section id="toc"><ul>${introductionToc} ${liste.join('')}</ul></section>`;
        return section;
    }

    private introduction(): string {
        let introduction: string = fs.readFileSync(this.srcFolder + 'preface.md', 'utf8');
        introduction = this.converter.makeHtml(introduction);
        const result: string = '<section id="preface">' + introduction + '</section>';
        return result;
    }
}

export default Html;
