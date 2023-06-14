import React, { useEffect, useState } from 'react';
import Button from './Button';
import { todoLocalStorage } from '../service/localstorage';

export default function Body() {

    const [isEmpty, setIsEmpty] = useState(true);
    const [typedValue, setTypedValue] = useState("");
    const [savedValueId, setSavedValueId] = useState("");
    const [todoLists, setTodoLists] = useState([]);
    
    useEffect(() => {
        console.log("Mount");
        let todoList = [];
        for(let i = 0; i < window.localStorage.length; i++){
            const key = window.localStorage.key(i);

            const value = JSON.parse(window.localStorage.getItem(key));

            // console.log(key, value);
            todoList.push({key, value});
        }
        setTodoLists(todoList);
        console.log(todoList);

    }, [savedValueId]);

    const addClick = () => {
        // console.log("Click!");
        setIsEmpty(!isEmpty);
    }

    const cancelClick = () => {
        // console.log("Canceled!");
        setIsEmpty(!isEmpty);
    }

    const saveClicked = () => {
        console.log("Clicked!")
        let todoId = 0;
        do{
            todoId = Math.floor(Math.random() * 10000);
            // console.log(!todoLocalStorage.get(todoId));
        }while(todoLocalStorage.get(todoId));
        // console.log(todoId);
        setSavedValueId(todoId);
        todoLocalStorage.set(todoId , JSON.stringify(typedValue));
    }

    const valueTyped = (e) => {
        // console.log("Typed!")
        // console.log(e.target.value)
        setTypedValue(e.target.value);
    }

    return (
        <>
            <ul className='m-5 flex'>
                <li className='mr-5' >
                    <Button addClick={addClick}>+ Add Todo</Button>
                </li>
                <li>
                    <Button>Edit Todo</Button>
                </li>
            </ul>
            {isEmpty ? <div className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white w-[70%] h-10 flex justify-center items-center'>Add your Todo List</div> : <div className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white max-md:h-18 w-[70%] h-16 flex justify-between items-center'>
                <input onChange={valueTyped} className="rounded-sm text-black p-1 ml-3 max-md:w-[60%] w-[65%]" placeholder='type your daily todo' value={typedValue} />
                <div className='mr-3'>
                    <Button addClick={saveClicked}>+ Save</Button>
                    <Button addClick={cancelClick}>Cancel</Button>
                </div>
            </div>}
            {/* {console.log(todoList)} */}
            {/* {console.log(todoLists)} */}
            {todoLists.map((e) => (
                <div key={e.key} className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white w-[70%] h-10 flex justify-between items-center mt-5'>
                    <div className='ml-5'>
                        {e.key}
                    </div>
                    <div className='mr-5'>
                        {e.value}
                    </div>
                </div>
            )) }
        </>
    );
};