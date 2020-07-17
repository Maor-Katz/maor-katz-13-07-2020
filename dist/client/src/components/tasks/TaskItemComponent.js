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
var React = __importStar(require("react"));
var react_moment_1 = __importDefault(require("react-moment"));
var TaskItemComponent = function (_a) {
    var t = _a.t, editTask = _a.editTask, deleteSpecificTask = _a.deleteSpecificTask, userDetails = _a.userDetails;
    return (React.createElement("div", { className: "taskLine" },
        React.createElement("div", { className: "detailTask usernameTask" },
            React.createElement("input", { type: "checkbox" }),
            t.username),
        React.createElement("div", { className: "detailTask phoneTask" }, t.phone),
        React.createElement("div", { className: "detailTask emailTask hr-display" }, t.email),
        React.createElement("div", { className: "detailTask dateTask hr-display" },
            React.createElement(react_moment_1.default, { format: "YYYY/MM/DD HH:mm" }, (t.date))),
        userDetails.isAdmin || t.user_id === +localStorage.user ? React.createElement("div", { className: "detailTask operations" },
            React.createElement("span", { className: "operation" },
                React.createElement("span", null,
                    React.createElement("i", { className: "far fa-eye operationSymbol", onClick: function () { return editTask(t, false); } })),
                React.createElement("span", { className: "operationType" }, "\u05E6\u05E4\u05D9\u05D9\u05D4")),
            React.createElement("span", { className: "operation" },
                React.createElement("span", null,
                    React.createElement("i", { className: "fas fa-pencil operationSymbol", onClick: function () { return editTask(t, true); } })),
                React.createElement("span", { className: "operationType" }, "\u05E2\u05E8\u05D9\u05DB\u05D4")),
            React.createElement("span", { className: "operation" },
                React.createElement("span", null,
                    React.createElement("i", { className: "fal fa-trash-alt operationSymbol", onClick: function () { return deleteSpecificTask(t.task_id); } })),
                React.createElement("span", { className: "operationType" }, "\u05DE\u05D7\u05D9\u05E7\u05D4"))) : React.createElement("div", { className: "detailTask operations" })));
};
exports.default = TaskItemComponent;
//# sourceMappingURL=TaskItemComponent.js.map