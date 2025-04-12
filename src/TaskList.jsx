import "./TaskList.css"


export default function TaskList({todos, onDelete, toggleComplete, toggleEditMode, handleEditChange}){
    
    return (
        <div>
            
           <ul className="TaskList">
            {
                // return for every array element
                todos.map((todo) => {

                    return (

                        // the class "completed" is given when task is done 
                    <div key={todo.id} className={`listItem ${todo.isDone ? "completed" : ""} ${todo.isEditing ? "editing" : ""}`}>

                        {/* the checkbox */}
                        <input 
                        className="markAsDone"
                        type="checkbox" 

                        // delete from array if id doesn't match
                        onChange={() => {
                            onDelete(todo.id);
                            toggleComplete(todo.id) 
                        }}
                         />

                        {/* the list item */}
                        {/* <li className="poppins" >{todo.task}</li> */}

                        {/* this was replaced to add an edit mode */}

                        {
                            todo.isEditing ? 

                            // true case
                            <input
                                className="editInput"
                                type="text"
                                value={todo.task}

                                // we pass two things to change value 1. id and 2. the newTask
                                onChange={(e) => handleEditChange(todo.id, e.target.value)}

                                onKeyDown={(e) => {
                                    // this is just to toggle isEditing: true
                                if (e.key === "Enter") toggleEditMode(todo.id);
                            }}
                           /> : 

                           //   false case
                           <li className="poppins" >{todo.task}</li> 
                  
                        }

                        <button onClick={() => toggleEditMode(todo.id)} className="editBtn">
                            {todo.isEditing ? 
                            "Save" : <i className="fa-solid fa-pen-to-square"></i>}
                        </button>


                    </div>
                    )
                })
            }        
           </ul>
       </div>    
    );
};