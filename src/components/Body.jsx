import React, { useEffect, useState } from 'react';
import Button from './Button';
import { todoLocalStorage } from '../service/localstorage';
import useTodoData from '../hooks/useTodoData';
import { todoService } from '../service/todoService';

export default function Body() {

    const [isEmpty, setIsEmpty] = useState(true);
    const [isEdit, setIsEdit] = useState(true);
    const [selectClicked, setSelectClicked] = useState(false);
    const [typedValue, setTypedValue] = useState("");
    const [checkedTodo, setCheckedTodo] = useState([]);
    const todoList = useTodoData();

    let checkedTodoList = [];

    const addClick = () => {
        // console.log("Click!");
        setIsEmpty(!isEmpty);
        if(!isEdit){
            setIsEdit(!isEdit);
        }
    }

    const cancelClick = () => {
        // console.log("Canceled!");
        setIsEmpty(!isEmpty);
    }

    const saveClicked = () => {
        console.log("Clicked!")

        if(typedValue === ""){
            alert("You didn't type any todo things!")
        }else{
            todoService.addTodo(typedValue);
        }
        setTypedValue("");
    }

    const valueTyped = (e) => {
        setTypedValue(e.target.value);
    }

    const editBtnClick = () => {
        setIsEdit(!isEdit);
        if(!isEmpty){
            setIsEmpty(!isEmpty);
        }
    }

    const editClick = () => {
        setSelectClicked(!selectClicked)
    }

    const isChecked = (e) => {
        console.log(e);
        console.log(e.target.value);
        console.log(e.target.checked);
        console.log("Clicked");
        console.log(checkedTodoList.includes(e.target.value));
        if(e.target.checked){
            if(!checkedTodoList.includes(e.target.value)){
                checkedTodoList.push(e.target.value);
            }
        }
        console.log(checkedTodoList)
    }

    const deleteClick = () => {
        window.confirm("Do you really want to delete all data?");
        todoService.deleteAllTodos();
        //not sure how to solve this problem
        console.log(todoList);
        // setTypedValue(" ");
    }

    return (
        <>
            <ul className='m-5 flex'>
                <li className='mr-5' >
                    <Button addClick={addClick}>+ Add Todo</Button>
                </li>
                <li>
                    <Button addClick={editBtnClick}>Edit Todo</Button>
                </li>
            </ul>
            {isEdit ? <></> : 
                <ul className='m-5 flex'>
                    <li className='mr-5'>
                        <Button addClick={editClick}>Edit Selected</Button>
                    </li>
                    <li>
                        <Button addClick={deleteClick}>Delete All</Button>
                    </li>
                </ul>
            }
            {isEmpty ? <form className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white w-[70%] h-10 flex justify-center items-center'>Add your Todo List</form> : <form className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white max-md:h-18 w-[70%] h-16 flex justify-between items-center'>
                <input onChange={valueTyped} className="rounded-sm text-black p-1 ml-3 max-md:w-[60%] w-[65%]" placeholder='type your daily todo' value={typedValue} />
                <div className='mr-3'>
                    <Button addClick={saveClicked}>+ Save</Button>
                    <Button addClick={cancelClick}>Cancel</Button>
                </div>
            </form>}
            {console.log(todoLocalStorage.isExist("TodoItems"))}
            {todoLocalStorage.isExist("TodoItems") ? todoList.map((e, i) => (
                <div key={e.id} className='bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-lg text-white w-[70%] h-10 flex justify-between items-center mt-5'>
                    <div className=' flex'>
                        {selectClicked ? <input className='ml-5 w-8' onClick={isChecked} type='checkbox' name='editTodoItem' value={e.id} /> : <></>
                        }
                        <div className='ml-5'>
                            {/* {e.id.substring(0,5)} */}
                            {"No. " + (i + 1)}
                        </div>
                    </div>
                    <div className='mr-5'>
                        {e.todo}
                    </div>
                </div>
            )) : <></> }
        </>
    );
};