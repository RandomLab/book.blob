class MakeTextes {

    /* make textes from file listing, convert md to html */

    private footnote = function () {
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
    }


    public showdown = require('showdown');
    public converter = new this.showdown.Converter(
            { headerLevelStart : 2,
              extensions: [this.footnote],
              noHeaderId : true } ,
            );

    constructor(private text: string, private chapNum: number, private fileNum: number) {
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
    }

    public textesBody(): string {
        try {
            const indexArticle =  this.chapNum + '.' + this.fileNum + ' ';
            const chapitre = this.textId(this.text);
            let section = `<section id="${chapitre}" class="subchapter">`;
            const html: string = this.converter.makeHtml(this.text);
            //let test = this.insertNum(html, indexArticle);
            //section = section.concat(test);
            section = section.concat(html)
            section = section.concat(`</section>`);
            return section;
        } catch (e) {
            console.log(e);
        }
    }

    private insertNum(main: string, ins: string): string {
        return main.slice(0, 4) + ins + main.slice(4);
    }

    private textName(name: string): string {
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

    private textId(name: string): string {
        try {
            const chapitre = this.textName(name);
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
}

export default MakeTextes;
