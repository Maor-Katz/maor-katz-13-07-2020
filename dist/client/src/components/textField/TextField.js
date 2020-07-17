"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var styles_1 = require("@material-ui/core/styles");
var Paper_1 = __importDefault(require("@material-ui/core/Paper"));
var InputBase_1 = __importDefault(require("@material-ui/core/InputBase"));
var IconButton_1 = __importDefault(require("@material-ui/core/IconButton"));
var Search_1 = __importDefault(require("@material-ui/icons/Search"));
var useStyles = styles_1.makeStyles(function (theme) { return ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        margin: '0 auto'
    },
    input: {
        marginLeft: theme.spacing(1),
        textAlign: "inherit",
        flex: 1
    },
    iconButton: {
        padding: 10,
    }
}); });
// @ts-ignore
function TextField(props) {
    var classes = useStyles();
    return (react_1.default.createElement(Paper_1.default, { component: "form", className: classes.root },
        react_1.default.createElement(IconButton_1.default, { type: "submit", className: classes.iconButton, "aria-label": "search" },
            react_1.default.createElement(Search_1.default, null)),
        react_1.default.createElement(InputBase_1.default, { className: classes.input, placeholder: "...\u05D7\u05D9\u05E4\u05D5\u05E9 \u05DE\u05E9\u05D9\u05DE\u05D4", inputProps: { 'aria-label': 'search google maps', "className": "alignRight" }, onChange: function (e) { return props.handler(e.target.value); } })));
}
exports.default = TextField;
//# sourceMappingURL=TextField.js.map