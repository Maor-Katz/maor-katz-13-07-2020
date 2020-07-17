export default class Task {
    id: number;
    title: string;
    description: string;
    date: Date;
    username: string;
    phone: string;
    email: string;

    constructor(id: number, title: string, description: string, username: string, phone: string, email: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.date = new Date();
        this.username = username;
        this.phone = phone;
        this.email = email;
    }
}