import "./taskbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faListUl } from "@fortawesome/free-solid-svg-icons";
import TaskList from "./TaskList";


export default function Taskbar(){
    return (
        <>
        <h2 className="myTasks">My Tasks <FontAwesomeIcon icon={faListUl} /></h2>
        
        <div className="Taskbar">
            <div className="theShinyBox">

                <button className="addBtn">
                    <div className="addLogo">
                        <FontAwesomeIcon icon={faPlus}/>
                    </div>
                </button>

                <input type="text" name="taskbar" placeholder="Add a task" className="inputTask"/>
            </div>
        </div>

        <TaskList/>
        </>
        
    );
};