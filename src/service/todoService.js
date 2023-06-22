import {Todo} from '../model/Todo';

class TodoService {
    constructor(){
        this.todos = JSON.parse(localStorage.getItem("TodoItems")) || [];
    }

    getTodos() {
        return this.todos;
    }

    addTodo(todo){
        const newTodo = new Todo(todo);
        this.todos.push(newTodo);
        localStorage.setItem('TodoItems', JSON.stringify(this.todos));
    }

    deleteAllTodos(){
        localStorage.clear();
    }

}

export const todoService = new TodoService();