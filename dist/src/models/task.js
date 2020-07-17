"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(id, title, description, username, phone, email) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = new Date();
        this.username = username;
        this.phone = phone;
        this.email = email;
    }
    return Task;
}());
exports.default = Task;
//# sourceMappingURL=task.js.map