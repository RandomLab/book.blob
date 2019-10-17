import * as fs from 'fs';
import * as path from 'path';
import MakeTexte from './makeTextes';

class ReadData {

    /* read text file in folder */

    private srcFolder: string;

    constructor( private pathToFolder: string, private chapNum: number) {
        this.srcFolder = path.join(__dirname, this.pathToFolder);
        this.chapNum = chapNum;
        this.readFolder();
    }

    public readFolder() {

        const one = new Promise<string>((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                const result: string[] = [];
                let fileNum = 0;
                for (const file of items) {
                    fileNum++;
                    const text = fs.readFileSync(this.srcFolder + file, 'utf8');
                    const md2html = new MakeTexte(text, this.chapNum, fileNum);
                    result.push(md2html.textesBody());
                }
                resolve(result.join('\n'));
            });
        });

        return one;
    }

}

export default ReadData;
