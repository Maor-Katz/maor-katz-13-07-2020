"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var mysql_1 = __importDefault(require("mysql"));
var App = /** @class */ (function () {
    function App(controllers, port) {
        if (port === void 0) { port = 5555; }
        this.app = express_1.default();
        this.port = port;
        var connection = mysql_1.default.createConnection({
            host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'jtctj841reqed4pa',
            password: 'mp7wqnw4limu2z5o',
            database: 'smwqc0rzzgmbwwzm'
        });
        connection.connect(function (err) {
            if (err) {
                console.log('Error connecting to Db');
                return;
            }
            console.log('Connected to DB!');
        });
        this.initializeMiddleware();
        this.initializeControllers(controllers);
    }
    App.prototype.initializeMiddleware = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(express_1.default.static('build'));
        this.app.use(cors_1.default());
    };
    App.prototype.initializeControllers = function (controllers) {
        var _this = this;
        controllers.forEach(function (controller) {
            _this.app.use('/', controller.router);
        });
    };
    App.prototype.listen = function () {
        var _this = this;
        this.app.listen(this.port, function () {
            console.log("App listening on the port " + _this.port);
        });
    };
    return App;
}());
exports.default = App;
//# sourceMappingURL=app.js.map