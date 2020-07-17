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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_router_dom_1 = require("react-router-dom");
var service_1 = require("../../services/service");
var Login = function () {
    var _a = react_1.useState(''), email = _a[0], setEmail = _a[1];
    var _b = react_1.useState(''), password = _b[0], setPassword = _b[1];
    var history = react_router_dom_1.useHistory();
    var loginUser = function (e) {
        e.preventDefault();
        service_1.login(email, password, history);
    };
    return (react_1.default.createElement("div", { className: "Login" },
        react_1.default.createElement("h1", { className: "large text-primary" }, "Sign In"),
        react_1.default.createElement("p", { className: "lead" },
            react_1.default.createElement("i", { className: "fas fa-user" }),
            "Sign into your account"),
        react_1.default.createElement("form", { action: "", className: "formLogin" },
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "text", placeholder: "Email Address", onChange: function (e) { return setEmail(e.target.value); } })),
            react_1.default.createElement("div", { className: "form-group" },
                react_1.default.createElement("input", { type: "password", placeholder: "Password", onChange: function (e) { return setPassword(e.target.value); } })),
            react_1.default.createElement("input", { type: "submit", value: "Login", className: "propItBtn", onClick: function (e) { return loginUser(e); } })),
        react_1.default.createElement("p", { className: "my-1" },
            "Don't have an account?",
            react_1.default.createElement(react_router_dom_1.Link, { to: "/register" }, "Sign Up"))));
};
exports.default = Login;
//# sourceMappingURL=Login.js.map