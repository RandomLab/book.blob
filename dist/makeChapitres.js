"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MakeChapitres {
    /* make chapitres from folders listing */
    constructor(folder, chapNum) {
        this.folder = folder;
        this.chapNum = chapNum;
        this.folder = folder;
        this.chapNum = chapNum;
    }
    chapitresBody() {
        const name = this.getChapitreName(this.folder);
        const title = this.makeTitle(name, ' ');
        const id = this.makeTitle(name, '-');
        /*const section = `<section id="${id}" class="chapter" data-chapter="${this.chapNum}">
        <h1>${title}</h1></section>`;*/
        const section = `<section id="${id}" class="chapter" data-chapter="${this.chapNum}"></section>`;
        //const section = ""
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
}
exports.default = MakeChapitres;
//# sourceMappingURL=makeChapitres.js.map