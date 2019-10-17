import * as path from 'path';
import * as express from 'express';
import { Request, Response } from 'express';

class App {

    /* app to serve html */

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.use(express.static(path.join(__dirname, './public')));
    }

    private routes(): void {
        const router = express.Router();

        router.get('/', (req: Request, res: Response) => {
            res.sendFile(__dirname + '/index.html');
        });

        this.app.use('/', router);
    }

}

export default new App().app;
