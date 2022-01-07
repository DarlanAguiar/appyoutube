import React, { useState } from 'react';
/* imr */

import "./AddTask.css"
import Button from './Button';

/* sfc */
const AddTask = ({handleTaskAddition}) => {

    const [inputData, SetInputData] = useState('');

    const handleInputChange = (e) => {
       SetInputData(e.target.value);
    }

    const handleAddTaskClck = () => {
        handleTaskAddition(inputData);
        SetInputData("");
    }


    return ( 
        <div className='add-Task-container'>

            <input onChange={handleInputChange} value={inputData} className='add-task-input' type="text" />
            <div className='add-task-container'>

                <Button onClick={handleAddTaskClck}>Adicionar</Button>

            </div>

        </div>


     );
}
 
export default AddTask;