import React, {Fragment} from 'react';
import container from './container';
import {NewTask, AddTaskButtonPadding, TaskTextArea, AddTaskButton} from './styled';

export const AddNewToDoListItem = ({title, onNewTaskBoxChange, addNewTask}) => {
    return(
        <Fragment>
            <NewTask>
                <TaskTextArea>
                    <textarea onChange={(event) => onNewTaskBoxChange(event)} value={title}></textarea>
                </TaskTextArea>
                <AddTaskButtonPadding>
                    <AddTaskButton onClick={() => addNewTask(title)}>Add Task</AddTaskButton>
                </AddTaskButtonPadding>
            </NewTask>
        </Fragment>
    );
};

export default container(AddNewToDoListItem);