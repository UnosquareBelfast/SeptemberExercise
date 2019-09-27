import React, { Fragment } from 'react';
import container from './container';
import { ToDoAddTaskBox,AddTextArea } from './styled';

export const AddToDo = ({ handleSubmit,taskValue,handleChange }) => {
  return (
    
        <Fragment>
          <ToDoAddTaskBox>
      <h1>Add New Task</h1>
        <AddTextArea value={taskValue} onChange={handleChange(taskValue)} ></AddTextArea>
      { <button onClick={handleSubmit()}>Add</button>}
      </ToDoAddTaskBox>
        </Fragment>)
      
};


export default container(AddToDo);