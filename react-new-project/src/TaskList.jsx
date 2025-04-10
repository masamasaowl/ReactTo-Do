import "./TaskList.css"


export default function TaskList({todos, onDelete}){
    
    return (
        <div>
           <ul className="TaskList">
            {
                // return for every array element
                todos.map((todo) => {

                    return (
                    <div key={todo.id} className="listItem">
                        {/* the checkbox */}
                        <input 
                        type="checkbox" 
                        // delete from array if id doesn't match
                        onChange={() => onDelete(todo.id)}

                         />

                         {/* the list item */}
                        <li className="poppins">{todo.task}</li>
                    </div>
                    )
                })
            }
               
               
           </ul>
       </div>    
    );
};