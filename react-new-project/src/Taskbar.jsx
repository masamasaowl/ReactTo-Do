import "./taskbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";
import { useState } from "react";
import {v4 as uuidv4} from "uuid";


export default function Taskbar(){
    // create a array that renders the component multiple times using state variables
    // later we wish to pass a unique id too so we make an array of objects
    let [todos, setTodos] = useState([]);

    // capture the state of changing values inside the input
    let [newTodo, setNewTodo] = useState('');

    let addNewTask = () => {
        console.log("value was added");
        setTodos((prevTodo) => 
            [...prevTodo, {task: newTodo, id: uuidv4()}]
        );    
        setNewTodo('')
    }

    let setNewTodoValue = (event) => {
        setNewTodo(event.target.value);
    }


    return (
        <>
        <h2 className="myTasks poppins">My Tasks <FontAwesomeIcon icon={faListUl} /></h2>
        
        <div className="Taskbar">
            <div className="theShinyBox">

                <button onClick={addNewTask} className="addBtn">
                    <div className="addLogo">
                    <i className="fa-solid fa-plus"></i>
                    </div>
                </button>

                <input
                // track input in the bar
                 onChange={setNewTodoValue}

                //  when we press enter
                 onKeyDown={(event) => {
                    if(event.key === "Enter"){
                        addNewTask()
                    }
                }}
                 type="text" name="taskbar" placeholder="Add a task" className="inputTask" value={newTodo}/>
            </div>
        </div>


        <TaskList todos= {todos || []} onDelete = {(id) => {
            setTodos(prevTodo => 
                prevTodo.filter(todo => todo.id !== id)
            )
        }}/>

        </>
    );
};
