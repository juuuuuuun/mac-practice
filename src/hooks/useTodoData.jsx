import React, { useEffect, useState } from 'react'
import { todoLocalStorage } from '../service/localstorage';

export default function useTodoData() {

    const [todoList, setTodoList] = useState([]);
    //use들어가는 친구들은 hook 이라고 불린다.
    useEffect(() => {
        console.log("Mount");
        let todoList = [];
        if(todoLocalStorage.isExist("Todo Items")){

            const key = "Todo Items"
            const value = JSON.parse(todoLocalStorage.get("Todo Items"));
            // console.log(key, value);
            todoList.push({key, value});   
            setTodoList(todoList);
        }
            console.log(todoList);
            console.log(typeof(todoList));

    }, []);

  return (
    todoList
  )
}
