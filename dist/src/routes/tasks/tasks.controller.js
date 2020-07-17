"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var TasksController = /** @class */ (function () {
    function TasksController() {
        var _this = this;
        this.path = '/tasks';
        this.pathParams = '/tasks/:id';
        this.router = express_1.default.Router();
        this.connection = mysql_1.default.createConnection({
            host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'jtctj841reqed4pa',
            password: 'mp7wqnw4limu2z5o',
            database: 'smwqc0rzzgmbwwzm'
        });
        this.getTask = function (request, response) {
            // if tasks saved in local:
            // const task: Task | undefined = this._tasks.find((task: Task) => task.id === +request.params.id);
            // response.send(task || "Task not exists");
            var q = "select * from tasks\nwhere tasks.id=" + request.params.id;
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                response.header("Cache-Control", "no-cache, no-store, must-revalidate");
                response.json(results.length > 0 ? results : 'Task not exists');
            });
        };
        // get tasks with user's details
        this.getAllTaskS = function (request, response) {
            var q = "select tasksProp.id as task_id, tasksProp.user_id, tasksProp.title, tasksProp.description,\ntasksProp.date, usersProp.username, usersProp.email, usersProp.phone from tasksProp\ninner join usersProp\non tasksProp.user_id=usersProp.id";
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                response.header("Cache-Control", "no-cache, no-store, must-revalidate");
                response.json(results);
            });
        };
        this.setTask = function (request, response) {
            try {
                var task = request.body;
                var _a = request.body, description = _a.description, user_id = _a.user_id, title = _a.title;
                if (!description || !title || !user_id) { //case some fields are missing
                    response.status(400).send("Missing Fields");
                }
                else {
                    // case tasks saved in local:
                    // const newTask: Task = new Task(this._tasks.length + 1, task.title, task.description, task.username, task.phone, task.email);
                    // this._tasks.push(newTask);
                    // response.send(newTask);
                    var q = "INSERT INTO tasksProp (user_id, title, description)\nVALUES (" + user_id + ",\"" + title + "\", \"" + description + "\")";
                    _this.connection.query(q, function (err, results) {
                        if (err)
                            throw err;
                        response.header("Cache-Control", "no-cache, no-store, must-revalidate");
                        response.json(results);
                    });
                }
            }
            catch (e) {
                console.log(e);
            }
        };
        this.deleteTask = function (request, response) {
            // let newArrTasks = this._tasks.filter((t: Task) => t.id !== +request.params.id)
            // this._tasks = newArrTasks;
            // response.send("task had been removed");
            var q = "DELETE FROM tasksProp\n    WHERE id=" + request.params.id + ";";
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                response.json(results);
            });
        };
        this.updateTask = function (request, response) {
            // case tasks saved local:
            // this._tasks = this._tasks.map((t) => {
            //     if (t.id === +request.params.id) {
            //         taskNotExists = false;
            //         t = {...t, ...request.body}
            //     }
            //     return t
            // });
            var _a = request.body, description = _a.description, title = _a.title;
            var q = "UPDATE tasksProp\n    SET description = \"" + description + "\", title=\"" + title + "\" \n    WHERE tasksProp.id=" + request.params.id;
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                response.json(results);
            });
        };
        this.initializeRoutes();
    }
    TasksController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllTaskS);
        this.router.post(this.path, this.setTask);
        this.router.get(this.pathParams, this.getTask);
        this.router.delete(this.pathParams, this.deleteTask);
        this.router.put(this.pathParams, this.updateTask);
    };
    return TasksController;
}());
exports.default = TasksController;
//# sourceMappingURL=tasks.controller.js.map