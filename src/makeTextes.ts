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
              metadata: true,
              extensions: [this.footnote],
              noHeaderId : true } ,
            );
    public metadata:object = {};

    constructor(private text: string, private chapNum: number, private fileNum: number) {
        this.text = text;
        this.chapNum = chapNum;
        this.fileNum = fileNum;
    }

    public textesBody(): string {
        try {
            const indexArticle =  this.chapNum + '.' + this.fileNum + ' ';
            const html: string = this.converter.makeHtml(this.text);
            const metadata = this.converter.getMetadata();
            // console.log(metadata)
            const chapitre = this.textId(metadata.title);
            let section = `<section id="${chapitre}" class="subchapter">`;
            let title = `<h2>${metadata.title}</h2>`

            //let test = this.insertNum(html, indexArticle);
            //section = section.concat(test);
            section = section.concat(title)

            if (metadata.authors){
              let authors = metadata.authors.split(",")
              for(let i = 0; i< authors.length ; i++){
                  let authorspan = `<span class="author dontHyphenate">${authors[i]}</span>`
                  section = section.concat(authorspan)
              }
            }
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


    private textId(name: string): string {
        try {
            const chapitre = name;
            console.log(chapitre)
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
