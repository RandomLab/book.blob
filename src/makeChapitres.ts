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

        const section = `<section id="${id}" class="chapter" data-chapter="${this.chapNum}"></section>`;
        return section;
    }

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
