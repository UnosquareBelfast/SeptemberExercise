import React, { Fragment } from 'react';
import container from './container';
import { ToDoAddTaskBox } from './styled';

export const AddToDo = ({ handleSubmit,taskValue,handleChange }) => {
  return (
    
        <Fragment>
          <ToDoAddTaskBox>
      <h1>Add New Task</h1>
        <textarea value={taskValue} onChange={handleChange(taskValue)}></textarea>
      { <button onClick={handleSubmit()}>Add</button>}
      </ToDoAddTaskBox>
        </Fragment>)
      
};


export default container(AddToDo);