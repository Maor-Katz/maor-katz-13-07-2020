import App from './src/app';
import express from 'express'
import TasksController from './src/routes/tasks/tasks.controller';
import * as process from "process";
import UserController from "./src/routes/auth/auth.controller";

const controllers: any = [
    new TasksController(),
    new UserController()
];

const app = new App(controllers, process.env.PORT || 4001);

app.listen();