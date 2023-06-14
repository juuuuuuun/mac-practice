class TodoLocalStorage {
    get(key){
        return localStorage.getItem(key);
    }

    set(key, value) {
        localStorage.setItem(key, value);
    }

    isExist(key){
        return !!localStorage.getItem(key);
    }
}

export const todoLocalStorage = new TodoLocalStorage();