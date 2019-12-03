class MakeChapitres {

    /* make chapitres from folders listing */

    constructor(private folder: string, private chapNum: number) {
        this.folder = folder;
        this.chapNum = chapNum;
    }

    public chapitresBody(): string {

        const name = this.getChapitreName(this.folder);
        const title = this.makeTitle(name, ' ');
        const id = this.makeTitle(name, '-');
        /*
        const section = `<section id="${id}" class="chapter" data-chapter="${this.chapNum}">
        <h1>${title}</h1></section>`;
        */
        const section = `<section id="${id}" class="chapter" data-chapter="${this.chapNum}"></section>`;
        return section;
    }


    // private getChapitreNum(name: string): string {
    //     try {
    //         const re = /^([0-9]+)/g;
    //         const data = name.match(re);
    //         const numero = data[0];
    //         return numero;
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    private getChapitreName(name: string): string[] {
        const re = /".*?"/g;
        const data = name.match(re);
        return data;
    }

    private makeTitle(data: string[], separator: string): string {
        const re = /"/g;
        const str = data.join(separator).replace(re, '');
        return str;
    }

}

export default MakeChapitres;
