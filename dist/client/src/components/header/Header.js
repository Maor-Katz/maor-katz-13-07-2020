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
var fireIcon_png_1 = __importDefault(require("../../images/fireIcon.png"));
var logo_png_1 = __importDefault(require("../../images/logo.png"));
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    var _a = react_1.useState(false), openHeaderMobile = _a[0], setOpenHeaderMobile = _a[1];
    var history = react_router_dom_1.useHistory();
    var logout = function () {
        localStorage.clear();
        history.push('/login');
    };
    return (react_1.default.createElement("div", { className: "Header" },
        react_1.default.createElement("div", { className: "leftHeader" },
            react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
                react_1.default.createElement("img", { src: logo_png_1.default, alt: "", className: "logo" })),
            react_1.default.createElement("div", { className: "phoneLetter" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("i", { className: "far fa-envelope-open" })),
                react_1.default.createElement("span", null, "0779985041"))),
        react_1.default.createElement("div", { className: "rightHeader desktop" },
            react_1.default.createElement("div", { className: "rightHdrBtn arrowFire" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement("i", { className: "fas fa-chevron-down" })),
                react_1.default.createElement("span", null, "\u05DC\u05D9\u05D3\u05D9\u05DD \u05D7\u05DE\u05D9\u05DD"),
                react_1.default.createElement("span", null,
                    react_1.default.createElement("img", { src: fireIcon_png_1.default, alt: "" }))),
            react_1.default.createElement("div", { className: "rightHdrBtn" }, "\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA"),
            react_1.default.createElement("div", { className: "rightHdrBtn" }, "\u05EA\u05D2\u05DE\u05D5\u05DC \u05E9\u05D5\u05EA\u05E4\u05D9\u05DD"),
            react_1.default.createElement("div", { className: "rightHdrBtn" }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E0\u05DB\u05E1"),
            react_1.default.createElement("div", { className: "rightHdrBtn" }, "\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05D8\u05D7\u05D9\u05DD"),
            react_1.default.createElement("div", { className: "rightHdrBtn" }, "\u05DE\u05D5\u05E2\u05D3\u05E4\u05D9\u05DD"),
            react_1.default.createElement("div", { className: "rightHdrBtn logout", onClick: function () {
                    logout();
                } }, "\u05D4\u05EA\u05E0\u05EA\u05E7"),
            react_1.default.createElement("div", { className: "rightHdrBtn demoSwitchBtn" },
                react_1.default.createElement("span", { className: "active pd13" }, "\u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"),
                react_1.default.createElement("span", { className: "pd13" }, "\u05DE\u05E1\u05D7\u05E8\u05D9"))),
        react_1.default.createElement("i", { className: "fas fa-bars mobile", onClick: function () { return setOpenHeaderMobile(!openHeaderMobile); } }),
        openHeaderMobile && react_1.default.createElement("div", { className: "headerMenu" },
            react_1.default.createElement("div", { className: "logout", onClick: function () {
                    logout();
                } }, "\u05D4\u05EA\u05E0\u05EA\u05E7"),
            react_1.default.createElement("div", { className: "" }, "\u05E7\u05D1\u05DC \u05D4\u05E6\u05E2\u05D4 \u05D0\u05D9\u05E9\u05D9\u05EA"),
            react_1.default.createElement("div", { className: "" }, "\u05EA\u05D2\u05DE\u05D5\u05DC \u05E9\u05D5\u05EA\u05E4\u05D9\u05DD"),
            react_1.default.createElement("div", { className: "" }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05E0\u05DB\u05E1"),
            react_1.default.createElement("div", { className: "" }, "\u05DE\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05D8\u05D7\u05D9\u05DD"),
            react_1.default.createElement("div", { className: "" }, "\u05DE\u05D5\u05E2\u05D3\u05E4\u05D9\u05DD"))));
};
exports.default = Header;
//# sourceMappingURL=Header.js.map