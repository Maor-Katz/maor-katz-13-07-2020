import express from 'express';
import mysql from "mysql";
import User from "../../models/user";
import IAuth from "./auth.interface";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";


export default class UserController implements IAuth {
    public path = '/auth';
    public registerRoute = '/auth/register';
    public loginRoute = '/auth/login';
    public getUserRoute = '/auth/user/:id';
    public router = express.Router();

    connection = mysql.createConnection({
        host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jtctj841reqed4pa',
        password: 'mp7wqnw4limu2z5o',
        database: 'smwqc0rzzgmbwwzm'
    });
    public app: express.Application;

    constructor() {
        this.app = express();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }

    private initializeMiddlewares() {
        this.router.use(this.checkUserExists);
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.getUserRoute, this.getUserDetails);
        this.router.post(this.registerRoute, this.registerUser);
        this.router.post(this.loginRoute, this.login);
    }


    getAllUsers = (request: express.Request, response: express.Response) => {
        let q = `SELECT * FROM usersProp`;
        this.connection.query(q, (err: any, results: any) => {
            if (err) throw err;
            response.header("Cache-Control", "no-cache, no-store, must-revalidate");
            response.json(results);
        });
    };

    login = (req: express.Request, res: express.Response) => {
        const {email, password} = req.body;

        if (req.hasOwnProperty('user')) {
            // @ts-ignore
            if (bcrypt.compareSync(password, req.user.password)) {
                // @ts-ignore
                jwt.sign({email, isAdmin: req.user.isAdmin}, "blah", {expiresIn: "50m"}, (err, token) => {
                    if (err) {
                        throw err;
                    }
                    //@ts-ignore
                    res.json({token, userid: req.user.id});
                })
            } else {
                res.status(401).send('incorrect password')
            }
        } else {
            res.status(400).json({message: 'user is not exists'});
        }
    };

    registerUser = (req: express.Request, res: express.Response) => {
        const {firstname, lastname, username, email, password, city, phone} = req.body;
        if (!req.hasOwnProperty('user')) {
            if (firstname && lastname && username && email && password && city && phone) {
                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(password, salt);

                let q = `INSERT INTO usersProp (firstname, lastname, username , email, password, city, phone)
VALUES ("${firstname}", "${lastname}", '${username}', '${email}' ,"${hash}", '${city}',"${phone}")`;
                this.connection.query(q, (err: any, results: any) => {
                    if (err) throw err;
                    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                    // response.json(results);
                    jwt.sign({email, isAdmin: false}, "blah", {expiresIn: "50m"}, (err, token) => {
                        if (err) {
                            throw err
                        }
                        //@ts-ignore
                        res.json({token, userid: results.insertId});
                    })
                });
            } else {
                res.status(400).send('missing credentials');
            }
        } else {
            res.status(400).json({message: 'user already exists'});
        }

    };

    // @ts-ignore
    checkUserExists = (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const {email} = req.body;
        let q = `SELECT * FROM usersProp`;
        this.connection.query(q, (err, results) => {
            if (err) {
                throw err;
            }
            const found = results.find((user: User) => {
                if (user.email === email) {
                    return true
                } else {
                    return false
                }
            })
            if (found) {
                // @ts-ignore
                req['user'] = found;
            }
            next();
        });
    };
    getUserDetails = (req: express.Request, res: express.Response) => {
        let q = `select * FROM usersProp
    WHERE id=${req.params.id};`
        this.connection.query(q, (err, results) => {
            if (err) throw err;
            res.json(results);
        });
    }
};