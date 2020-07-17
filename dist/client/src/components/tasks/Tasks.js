"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var React = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var service_1 = require("../../services/service");
var react_modal_1 = __importDefault(require("react-modal"));
var TaskItemComponent_1 = __importDefault(require("./TaskItemComponent"));
var Loader_1 = __importDefault(require("../loader/Loader"));
var Tasks = function () {
    var _a = react_1.useState([]), tasksList = _a[0], setTasksLists = _a[1];
    var _b = react_1.useState(false), modalIsOpen = _b[0], setModalIsOpen = _b[1];
    var _c = react_1.useState(false), editTaskFlag = _c[0], setEditTask = _c[1];
    var _d = react_1.useState({ username: '', email: '', title: '', description: '' }), specificTask = _d[0], setSpecificTask = _d[1];
    var _e = react_1.useState({}), userDetails = _e[0], setUserDetails = _e[1];
    var _f = react_1.useState(true), loading = _f[0], setLoading = _f[1];
    var getTasks = function () { return __awaiter(void 0, void 0, void 0, function () {
        var tasks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service_1.getAllTask()];
                case 1:
                    tasks = _a.sent();
                    setTasksLists(tasks);
                    return [2 /*return*/];
            }
        });
    }); };
    var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
        var user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service_1.getUserDetails()];
                case 1:
                    user = _a.sent();
                    setUserDetails(user);
                    return [2 /*return*/];
            }
        });
    }); };
    react_1.useEffect(function () {
        (function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!localStorage.user) return [3 /*break*/, 2];
                            return [4 /*yield*/, getUser()];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2: return [4 /*yield*/, getTasks()];
                        case 3:
                            _a.sent();
                            setLoading(!loading);
                            return [2 /*return*/];
                    }
                });
            });
        })();
    }, []);
    var handleChange = function (e) {
        var _a;
        setSpecificTask(__assign(__assign({}, specificTask), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var updateSpecifcTask = function (task, e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    return [4 /*yield*/, service_1.updateTask(task)];
                case 1:
                    _a.sent();
                    setEditTask(false);
                    setModalIsOpen(!modalIsOpen);
                    return [4 /*yield*/, getTasks()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var closeModal = function () {
        setSpecificTask({ username: '', email: '', title: '', description: '' });
        setEditTask(false);
        setModalIsOpen(!modalIsOpen);
    };
    var editTask = function (task, edit) {
        if (edit) {
            setEditTask(true);
        }
        setSpecificTask(task);
        setModalIsOpen(!modalIsOpen);
    };
    var deleteSpecificTask = function (id) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service_1.deleteTask(id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, getTasks()];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); };
    var sortByField = function (field) {
        // @ts-ignore
        var newArr = tasksList.slice().sort(function (a, b) { return (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0); });
        setTasksLists(newArr);
    };
    var customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: "#20232a",
            color: "#fff"
        }
    };
    if (!localStorage.token) {
        return React.createElement(react_router_dom_1.Redirect, { to: "/login" });
    }
    if (loading) {
        return React.createElement(Loader_1.default, null);
    }
    return (React.createElement("div", { className: "Tasks" },
        React.createElement("div", { className: "upperContainer" },
            React.createElement("div", null,
                React.createElement(react_router_dom_1.Link, { to: "/add" },
                    React.createElement("button", { className: "propItBtn" }, "\u05DE\u05E9\u05D9\u05DE\u05D4 \u05D7\u05D3\u05E9\u05D4"))),
            React.createElement("div", { className: "listCostumers" },
                "(",
                tasksList.length,
                ")\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E9\u05DC\u05DA")),
        React.createElement("div", { className: "titleLine" },
            React.createElement("div", { className: "specificTitle" }, "\u05E4\u05E2\u05D5\u05DC\u05D5\u05EA"),
            React.createElement("div", { className: "specificTitle hr-display" },
                React.createElement("i", { className: "fas fa-sort", onClick: function () { return sortByField('date'); } }),
                React.createElement("span", null, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D9\u05E6\u05D9\u05E8\u05EA \u05D4\u05DE\u05E9\u05D9\u05DE\u05D4")),
            React.createElement("div", { className: "specificTitle hr-display" }, "\u05DE\u05D9\u05D9\u05DC"),
            React.createElement("div", { className: "specificTitle" }, "\u05D8\u05DC\u05E4\u05D5\u05DF"),
            React.createElement("div", { className: "specificTitle usernameTitle" },
                React.createElement("i", { className: "fas fa-sort", onClick: function () { return sortByField('username'); } }),
                React.createElement("span", null, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9"),
                React.createElement("input", { type: "checkbox" }))),
        React.createElement("div", { className: "tasksList" }, tasksList.length > 0 && tasksList.map(function (t, index) { return (React.createElement(TaskItemComponent_1.default, { t: t, deleteSpecificTask: deleteSpecificTask, editTask: editTask, key: index, userDetails: userDetails })); })),
        React.createElement(react_modal_1.default, { isOpen: modalIsOpen, style: customStyles, contentLabel: "Example Modal" },
            React.createElement("i", { className: "fas fa-times-square", onClick: function () { return closeModal(); } }),
            React.createElement("div", { className: "modalTitle" }, "Task"),
            React.createElement("form", { id: "formModal", onSubmit: function (e) { return updateSpecifcTask(specificTask, e); } },
                React.createElement("div", null, "TITLE"),
                React.createElement("input", { name: "title", type: "text", value: specificTask.title, onChange: function (e) { return handleChange(e); }, id: "title", placeholder: "TYPE TITLE", className: "minWidth" }),
                React.createElement("div", null, "DESCRIPTION"),
                React.createElement("textarea", { id: "message", onChange: function (e) { return handleChange(e); }, name: "description", value: specificTask.description, placeholder: "TYPE YOUR MESSAGE", style: { height: "240px" }, className: "minWidth" }),
                editTaskFlag && React.createElement("div", { className: "saveBtnWrapper" },
                    React.createElement("input", { type: "submit", className: "propItBtn", value: "Save" }))))));
};
exports.default = Tasks;
//# sourceMappingURL=Tasks.js.map