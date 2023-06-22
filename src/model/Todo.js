import { getRandomNumber } from "../utils/getRandomNumber";

export class Todo {
    constructor(todo) {
        this.id = getRandomNumber();
        this.todo = todo;
        this.created = new Date().toString();
        this.updated = new Date().toString();
    }
}