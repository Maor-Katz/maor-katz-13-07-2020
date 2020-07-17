import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mysql from 'mysql';
import path from "path";

export default class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any, port: any = 5555) {
        this.app = express();
        this.port = port;
        const connection = mysql.createConnection({
            host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'jtctj841reqed4pa',
            password: 'mp7wqnw4limu2z5o',
            database: 'smwqc0rzzgmbwwzm'
        });
        connection.connect((err: any) => {
            if (err) {
                console.log('Error connecting to Db');
                return;
            }
            console.log('Connected to DB!');
        });
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }

    private initializeMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(express.static('build'));
        this.app.use(cors());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use('/', controller.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}