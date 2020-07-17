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
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var react_hook_form_1 = require("react-hook-form");
var service_1 = require("../../services/service");
var react_router_dom_1 = require("react-router-dom");
var CreateTask = function (props) {
    var _a = react_hook_form_1.useForm(), register = _a.register, handleSubmit = _a.handleSubmit, errors = _a.errors;
    var _b = react_1.useState({ title: '', username: "", phone: '', description: "" }), formData = _b[0], setFormData = _b[1];
    var history = react_router_dom_1.useHistory();
    // @ts-ignore
    var handleChange = function (e) {
        var _a;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = e.target.value, _a)));
    };
    var addTaskToList = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, service_1.addTask(formData)];
                case 1:
                    _a.sent();
                    history.push("/");
                    return [2 /*return*/];
            }
        });
    }); };
    return (react_1.default.createElement("div", { className: "contactForm" },
        react_1.default.createElement("div", { className: "addTaskTitle" }, "Add Task"),
        react_1.default.createElement("form", { id: "myForm", onSubmit: handleSubmit(addTaskToList) },
            react_1.default.createElement("div", { className: "inputLabel" }, "TITLE"),
            react_1.default.createElement("input", { name: "title", type: "text", id: "title", "aria-invalid": errors.name ? "true" : "false", "aria-describedby": "error-name-required error-name-maxLength", ref: register({ required: true }), placeholder: "TYPE YOUR TITLE", className: "oneInput", onChange: function (e) { return handleChange(e); }, style: { width: "100%" } }),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "twoInputs" },
                    react_1.default.createElement("div", { className: "inputAndLabel" },
                        react_1.default.createElement("span", { className: "inputLabel" }, "PHONE"),
                        react_1.default.createElement("input", { name: "phone", type: "text", onChange: function (e) { return handleChange(e); }, id: "phone", "aria-invalid": errors.phone ? "true" : "false", "aria-describedby": "error-phone-required", ref: register({ required: true }), placeholder: "TYPE PHONE NUMBER", className: "oneInput phoneInput" })),
                    react_1.default.createElement("div", { className: "inputAndLabel" },
                        react_1.default.createElement("span", { className: "inputLabel" }, "EMAIL"),
                        react_1.default.createElement("input", { type: "text", id: "email", name: "email", onChange: function (e) { return handleChange(e); }, "aria-invalid": errors.email ? "true" : "false", "aria-describedby": "error-name-required", ref: register({ required: true }), placeholder: "TYPE YOUR EMAIL", className: "oneInput emailInput" })))),
            react_1.default.createElement("div", { className: "inputLabel" }, "DESCRIPTION"),
            react_1.default.createElement("textarea", { id: "description", onChange: function (e) { return handleChange(e); }, name: "description", "aria-invalid": errors.message ? "true" : "false", "aria-describedby": "error-name-required", ref: register({ required: true }), placeholder: "TYPE YOUR DESCRIPTION", className: "oneInput", style: { height: "240px", width: "100%" } }),
            errors.title && react_1.default.createElement("p", { className: "errorMsg" }, "*Title requiered"),
            errors.phone && react_1.default.createElement("p", { className: "errorMsg" }, "*Phone requiered"),
            errors.email && react_1.default.createElement("p", { className: "errorMsg" }, "*Email requiered"),
            errors.description && react_1.default.createElement("p", { className: "errorMsg" }, "*Description requiered"),
            react_1.default.createElement("div", { className: "submitWrapper" },
                react_1.default.createElement("input", { type: "submit", value: "Submit", className: "propItBtn" })))));
};
exports.default = CreateTask;
//# sourceMappingURL=CreateTask.js.map