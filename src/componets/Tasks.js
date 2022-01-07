import React from "react";
import Task from "./Task";

const Tasks = ({tasks, handleTaskClick, handleTaskDeletion}) => {

    return (
        <>
        
            {tasks.map((task) => 
                <Task 
                    //passando o key para nao mostrar mensagem de erro no log
                    key={task.id}
                    task={task} 
                    handleTaskClick={handleTaskClick}
                    handleTaskDeletion={handleTaskDeletion}
                />)}
        
        </>



    )
}

export default Tasks;