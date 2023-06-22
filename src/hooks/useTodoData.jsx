import React, { useEffect, useState } from 'react'
import { todoLocalStorage } from '../service/localstorage';
import { todoService } from '../service/todoService';

export default function useTodoData() {

    const [todoList, setTodoList] = useState([]);
    //use들어가는 친구들은 hook 이라고 불린다.
    useEffect(() => {
        console.log("Mount");
 
            setTodoList(todoService.getTodos());
            
    }, []);
    
    console.log(todoList);

  return (
    todoList
  )
}
