import {Todo} from '../model/Todo';

class TodoService {
    constructor(){
        this.todos = JSON.parse(localStorage.getItem("TodoItems")) || [];
        this.editTodos = JSON.parse(localStorage.getItem("EditItems")) || [];
    }

    getTodos() {
        return this.todos;
    }

    addTodo(todo){
        const newTodo = new Todo(todo);
        this.todos.push(newTodo);
        localStorage.setItem('TodoItems', JSON.stringify(this.todos));
    }

    editTodo(todo){
        const editTodo = new Todo(todo);
        // console.log(todo)
        this.editTodos.push(editTodo);
        console.log(this.editTodos);
        localStorage.setItem('TodoItems', JSON.stringify(this.editTodos));
        // this.todos = editTodos;
    }

    deleteAllTodos(){
        localStorage.clear();
    }

}

export const todoService = new TodoService();