import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Button from './Button.js';

import "./TaskDetails.css"

const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();

    const handleBackButtonclick = () => {
        history.goBack();
    }
    

    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBackButtonclick}>Voltar</Button>
            </div>
            <div className='task-details-container'>
                <h2>{params.TaskTitle}</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, bLorem Ipsum</p>
            </div>
        
        </>
     );
}
 
export default TaskDetails;