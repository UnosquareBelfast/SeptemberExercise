import React, { Fragment } from 'react';
import container from './container';
import {NewTask,AddTaskButton, TaskTextArea} from './styled';


export const AddNewToDoListItem = ({ title, onNewTaskBoxChange, addNewTask }) => {

  return (
    <Fragment>
        <NewTask>
          <TaskTextArea>
          <textarea onChange={(event) => onNewTaskBoxChange(event)} value={title}></textarea>
          
          </TaskTextArea>
          <AddTaskButton>
          <button onClick={() => addNewTask(title)}> Add Task </button>
          </AddTaskButton>
    </NewTask>
    </Fragment>
 );
};

export default container(AddNewToDoListItem);
