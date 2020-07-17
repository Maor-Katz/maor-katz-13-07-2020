"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
require("./App.css");
var TextField_1 = __importDefault(require("./components/textField/TextField"));
var Header_1 = __importDefault(require("./components/header/Header"));
var Title_1 = __importDefault(require("./components/title/Title"));
var Tasks_1 = __importDefault(require("./components/tasks/Tasks"));
var react_router_dom_1 = require("react-router-dom");
var CreateTask_1 = __importDefault(require("./components/createTask/CreateTask"));
var Login_1 = __importDefault(require("./components/auth/Login"));
var Register_1 = __importDefault(require("./components/auth/Register"));
function App() {
    var _a = react_1.useState(''), inputValue = _a[0], setInputValue = _a[1];
    var handler = function (value) {
        setInputValue(value);
    };
    return react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
        react_1.default.createElement("div", { className: "App" },
            react_1.default.createElement(Header_1.default, null),
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: function () { return react_1.default.createElement("div", { className: "container" },
                        react_1.default.createElement(Title_1.default, null),
                        react_1.default.createElement(TextField_1.default, { handler: handler }),
                        react_1.default.createElement(Tasks_1.default, null)); } }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/add", component: function () { return react_1.default.createElement(CreateTask_1.default, null); } }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/login", component: function () { return react_1.default.createElement(Login_1.default, null); } }),
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/register", component: function () { return react_1.default.createElement(Register_1.default, null); } }))));
}
exports.default = App;
//# sourceMappingURL=App.js.map