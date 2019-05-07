"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const express = require("express");
class App {
    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }
    config() {
        this.app.use(express.static(path.join(__dirname, './public')));
    }
    routes() {
        const router = express.Router();
        router.get('/', (req, res) => {
            res.sendFile(__dirname + '/index.html');
        });
        this.app.use('/', router);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map