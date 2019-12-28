class MakeTextes {

    /* make textes from file listing, convert md to html */

    private footnote = function () {
        var footnote1 = {
            type: 'lang',
            filter: function( text: string, converter: any, options: any){
              var reg = /\[\^([A-Za-z0-9]+)\]: (.*)/g;

              var result = reg.exec(text);
              while (result){
                var note_html = converter.makeHtml(result[2]).replace(/<p>(.+)<\/p>/g,"$1");
                text = text.replace(result[0], "<div class='note' id='note_"+result[1]+"'>"+result[1] +" "+ note_html+"</div>");
                result = reg.exec(text);
              }

              return text;
            }
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
              strikethrough: true,
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
            // const indexArticle =  this.chapNum + '.' + this.fileNum + ' ';
            const html: string = this.converter.makeHtml(this.text);
            const metadata = this.converter.getMetadata();
            const chapitre = this.textId(metadata.title);
            let section = `<section id="${chapitre}" class="subchapter ${metadata.type}">`;
            let title = `<h2>${this.makeTitle(metadata.title)}</h2>`;
            let runningTitle = "";

            if (metadata.runningTitle) {
              runningTitle = `<span class="runningTitle">${metadata.runningTitle}</span>`;
            }else{
              runningTitle = `<span class="runningTitle"></span>`;
            }
            section = section.concat(title);

            if (metadata.authors){
              let authors = metadata.authors.split(",");
              for(let i = 0; i< authors.length ; i++){
                  let authorspan = `<span class="author dontHyphenate">${authors[i]}</span>`;
                  section = section.concat(authorspan);
              }
            }
            section = section.concat(runningTitle);
            section = section.concat("<hr>");
            section = section.concat(html);
            section = section.concat(`</section>`);
            return section;
        } catch (e) {
            console.log(e);
        }
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

    private makeTitle(data: string): string {
      const htmldata = this.converter.makeHtml(data);
      const re1 = /<p>(.+)<\/p>/g;
      const re2 = /"/g;
      let str = htmldata.replace(re1,"$1");
      return str;
    }
}

export default MakeTextes;
