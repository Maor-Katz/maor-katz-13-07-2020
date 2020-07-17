"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mysql_1 = __importDefault(require("mysql"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UserController = /** @class */ (function () {
    function UserController() {
        var _this = this;
        this.path = '/auth';
        this.registerRoute = '/auth/register';
        this.loginRoute = '/auth/login';
        this.getUserRoute = '/auth/user/:id';
        this.router = express_1.default.Router();
        this.connection = mysql_1.default.createConnection({
            host: 'qbhol6k6vexd5qjs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
            user: 'jtctj841reqed4pa',
            password: 'mp7wqnw4limu2z5o',
            database: 'smwqc0rzzgmbwwzm'
        });
        this.getAllUsers = function (request, response) {
            var q = "SELECT * FROM usersProp";
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                response.header("Cache-Control", "no-cache, no-store, must-revalidate");
                response.json(results);
            });
        };
        this.login = function (req, res) {
            var _a = req.body, email = _a.email, password = _a.password;
            if (req.hasOwnProperty('user')) {
                // @ts-ignore
                if (bcrypt_1.default.compareSync(password, req.user.password)) {
                    // @ts-ignore
                    jsonwebtoken_1.default.sign({ email: email, isAdmin: req.user.isAdmin }, "blah", { expiresIn: "50m" }, function (err, token) {
                        if (err) {
                            throw err;
                        }
                        //@ts-ignore
                        res.json({ token: token, userid: req.user.id });
                    });
                }
                else {
                    res.status(401).send('incorrect password');
                }
            }
            else {
                res.status(400).json({ message: 'user is not exists' });
            }
        };
        this.registerUser = function (req, res) {
            var _a = req.body, firstname = _a.firstname, lastname = _a.lastname, username = _a.username, email = _a.email, password = _a.password, city = _a.city, phone = _a.phone;
            if (!req.hasOwnProperty('user')) {
                if (firstname && lastname && username && email && password && city && phone) {
                    var salt = bcrypt_1.default.genSaltSync(10);
                    var hash = bcrypt_1.default.hashSync(password, salt);
                    var q = "INSERT INTO usersProp (firstname, lastname, username , email, password, city, phone)\nVALUES (\"" + firstname + "\", \"" + lastname + "\", '" + username + "', '" + email + "' ,\"" + hash + "\", '" + city + "',\"" + phone + "\")";
                    _this.connection.query(q, function (err, results) {
                        if (err)
                            throw err;
                        res.header("Cache-Control", "no-cache, no-store, must-revalidate");
                        // response.json(results);
                        jsonwebtoken_1.default.sign({ email: email, isAdmin: false }, "blah", { expiresIn: "50m" }, function (err, token) {
                            if (err) {
                                throw err;
                            }
                            //@ts-ignore
                            res.json({ token: token, userid: results.insertId });
                        });
                    });
                }
                else {
                    res.status(400).send('missing credentials');
                }
            }
            else {
                res.status(400).json({ message: 'user already exists' });
            }
        };
        // @ts-ignore
        this.checkUserExists = function (req, res, next) {
            var email = req.body.email;
            var q = "SELECT * FROM usersProp";
            _this.connection.query(q, function (err, results) {
                if (err) {
                    throw err;
                }
                var found = results.find(function (user) {
                    if (user.email === email) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                if (found) {
                    // @ts-ignore
                    req['user'] = found;
                }
                next();
            });
        };
        this.getUserDetails = function (req, res) {
            var q = "select * FROM usersProp\n    WHERE id=" + req.params.id + ";";
            _this.connection.query(q, function (err, results) {
                if (err)
                    throw err;
                res.json(results);
            });
        };
        this.app = express_1.default();
        this.initializeMiddlewares();
        this.initializeRoutes();
    }
    UserController.prototype.initializeMiddlewares = function () {
        this.router.use(this.checkUserExists);
    };
    UserController.prototype.initializeRoutes = function () {
        this.router.get(this.path, this.getAllUsers);
        this.router.get(this.getUserRoute, this.getUserDetails);
        this.router.post(this.registerRoute, this.registerUser);
        this.router.post(this.loginRoute, this.login);
    };
    return UserController;
}());
exports.default = UserController;
;
//# sourceMappingURL=auth.controller.js.map