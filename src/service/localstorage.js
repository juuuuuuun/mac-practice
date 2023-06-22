class TodoLocalStorage {
    get(key){
        return JSON.parse(localStorage.getItem(key));
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    remove() {
        localStorage.removeItem("TodoItems");
    }

    isExist(key){
        return !!localStorage.getItem(key);
    }
}

export const todoLocalStorage = new TodoLocalStorage();