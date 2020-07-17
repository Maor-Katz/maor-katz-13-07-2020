export default class User {
    username: string;
    email: string;
    password: string;
    admin: boolean;
    id: number;

    constructor(username: string, email: string, password: string, admin: boolean, id: number) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.admin = admin;
        this.id = id;
    }
}