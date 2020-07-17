import Task from "../../models/task";
import * as express from "express";

export default interface ITask {
    getTask(request: express.Request, response: express.Response): void;
    setTask(request: express.Request, response: express.Response): void;
}