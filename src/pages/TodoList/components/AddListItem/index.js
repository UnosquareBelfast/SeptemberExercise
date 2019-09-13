import React, { Fragment } from 'react';
import container from './container';
import { AddTodoArea, AddTodo, AddTaskText, TextArea, AddTaskButton, MyAddButton } from './styled';

export const AddListItem = ({ addItemToList }) => {

  return (
    <AddTodoArea>
      <AddTodo>
        <AddTaskText><TextArea id='newTaskTitle'></TextArea></AddTaskText>
        <AddTaskButton><MyAddButton onClick={() => addItemToList(document.getElementById('newTaskTitle').value)}>Add</MyAddButton></AddTaskButton>
      </AddTodo>
    </AddTodoArea>
  );
};

export default container(AddListItem);
