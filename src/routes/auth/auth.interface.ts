import * as express from "express";

export default interface IAuth {
    login(request: express.Request, response: express.Response): void;

    registerUser(request: express.Request, response: express.Response): void;

    // checkUserExists(request: express.Request, response: express.Response): void;
}