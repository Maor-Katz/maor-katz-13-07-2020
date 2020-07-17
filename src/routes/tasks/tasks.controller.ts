import express from 'express';
import ITask from './task.interface';
import Task from '../../models/task';
import mysql from "mysql";
import user from "../../models/user";

export default class TasksController implements ITask {
    public path = '/tasks';
    public pathParams = '/tasks/:id';
    public router = express.Router();

    connection = mysql.createConnection({
        host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'jtctj841reqed4pa',
        password: 'mp7wqnw4limu2z5o',
        database: 'smwqc0rzzgmbwwzm'
    });

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getAllTaskS);
        this.router.post(this.path, this.setTask);
        this.router.get(this.pathParams, this.getTask);
        this.router.delete(this.pathParams, this.deleteTask);
        this.router.put(this.pathParams, this.updateTask);
    }

    getTask = (request: express.Request, response: express.Response) => {
        // if tasks saved in local:
        // const task: Task | undefined = this._tasks.find((task: Task) => task.id === +request.params.id);
        // response.send(task || "Task not exists");
        let q = `select * from tasks
where tasks.id=${request.params.id}`;
        this.connection.query(q, (err: any, results: any) => {
            if (err) throw err;
            response.header("Cache-Control", "no-cache, no-store, must-revalidate");
            response.json(results.length > 0 ? results : 'Task not exists');
        });
    };
// get tasks with user's details
    getAllTaskS = (request: express.Request, response: express.Response) => {
        let q = `select tasksProp.id as task_id, tasksProp.user_id, tasksProp.title, tasksProp.description,
tasksProp.date, usersProp.username, usersProp.email, usersProp.phone from tasksProp
inner join usersProp
on tasksProp.user_id=usersProp.id`;
        this.connection.query(q, (err: any, results: any) => {
            if (err) throw err;
            response.header("Cache-Control", "no-cache, no-store, must-revalidate");
            response.json(results);
        });
    };

    setTask = (request: express.Request, response: express.Response) => {
        try {
            const task: Task = request.body;
            const {description, user_id, title} = request.body;
            if (!description || !title || !user_id) {//case some fields are missing
                response.status(400).send("Missing Fields")
            } else {
                // case tasks saved in local:
                // const newTask: Task = new Task(this._tasks.length + 1, task.title, task.description, task.username, task.phone, task.email);
                // this._tasks.push(newTask);
                // response.send(newTask);
                let q = `INSERT INTO tasksProp (user_id, title, description)
VALUES (${user_id},"${title}", "${description}")`;
                this.connection.query(q, (err: any, results: any) => {
                    if (err) throw err;
                    response.header("Cache-Control", "no-cache, no-store, must-revalidate");
                    response.json(results);
                });
            }

        } catch (e) {
            console.log(e);
        }
    }

    deleteTask = (request: express.Request, response: express.Response) => {
        // let newArrTasks = this._tasks.filter((t: Task) => t.id !== +request.params.id)
        // this._tasks = newArrTasks;
        // response.send("task had been removed");
        let q = `DELETE FROM tasksProp
    WHERE id=${request.params.id};`
        this.connection.query(q, (err, results) => {
            if (err) throw err;
            response.json(results);
        });
    }

    updateTask = (request: express.Request, response: express.Response) => {
        // case tasks saved local:
        // this._tasks = this._tasks.map((t) => {
        //     if (t.id === +request.params.id) {
        //         taskNotExists = false;
        //         t = {...t, ...request.body}
        //     }
        //     return t
        // });
        const {description, title} = request.body;
        let q = `UPDATE tasksProp
    SET description = "${description}", title="${title}" 
    WHERE tasksProp.id=${request.params.id}`;
        this.connection.query(q, (err, results) => {
            if (err) throw err;
            response.json(results);
        });
    }
}