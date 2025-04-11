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
        // prevent empty tasks
        if (!newTodo.trim()) return;
        console.log("value was added");
        setTodos((prevTodo) => 
            [...prevTodo, {task: newTodo, id: uuidv4(), isDone: false, isEditing: false}]
        );    
        setNewTodo('')
    }

    let setNewTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let onDelete = (id) => {
        
        setTimeout(() => {
            setTodos(prevTodo => 
                prevTodo.filter(todo => todo.id !== id)
            )  
        },400)  
    };

    // to check if task was done
    let toggleComplete = (id) => {
        setTodos(prevTodo =>
            prevTodo.map(todo => todo.id === id ? 
                {...todo, isDone : !todo.isDone} : todo )
        );
    }

    // edit task
    let toggleEditMode = (id) => {
        setTodos(prevTodo => 
            prevTodo.map(todo => 
                todo.id === id ? 
                { ...todo, isEditing: !todo.isEditing } : todo
            )
        )
    };

    // if the task was edited then edit the array
    let handleEditChange = (id, newTask) => {
        setTodos(prevTodo => 
            prevTodo.map(todo => 
                todo.id === id ? 
                {...todo, task: newTask} : todo
            )
        )
    };


    return (
        <>
        <h2 className="myTasks poppins"> My Tasks <FontAwesomeIcon icon={faListUl} /></h2>
        
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


        <TaskList
            todos= {todos || []} onDelete = {onDelete} toggleComplete ={toggleComplete} toggleEditMode={toggleEditMode}
            handleEditChange={handleEditChange}
        />

        </>
    );
};
