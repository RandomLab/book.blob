import * as fs from 'fs';
import * as path from 'path';

// TODO: nettoyer les fichiers html de chapitres / dist .js .map .html

class GetData {
    private srcFolder: string;

    constructor( private pathToFolder: string) {
        this.srcFolder = path.join(__dirname, this.pathToFolder);
    }

    public readMainFolder() {
        const one = new Promise<string[]>((resolve, reject) => {
            fs.readdir(this.srcFolder, (err, items) => {
                if (err) {
                    reject(new Error('failed'));
                }
                resolve(items);
            });
        });
        return one;
    }

}

export default GetData;
