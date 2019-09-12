import React, { Fragment } from 'react';
import container from './container';
import { MyTodoNotes, MyTodos , MyTodoActions, MyButton, UpdateTaskText } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {

  return (
    <MyTodoNotes>
      { isUpdating ? (
        <Fragment>
          <MyTodoActions>
            <MyButton onClick={() => saveItem(id, title)}>Save</MyButton>
            <MyButton onClick={() => toggleUpdateMode()}>Cancel</MyButton>
          </MyTodoActions>
          <UpdateTaskText>
            <input type="text" onChange={(event) => onTitleChanged(event)} value={title}></input>
          </UpdateTaskText>
        </Fragment>) : 
        <Fragment>
          <MyTodoActions>
            <MyButton onClick={() => deleteItem(id)}>Done</MyButton>
            <MyButton onClick={() => toggleUpdateMode()}>Update</MyButton>
          </MyTodoActions>
          <MyTodos>{displayText}</MyTodos>
        </Fragment>
      }
    </MyTodoNotes>
  );
};

export default container(TodoListItem);
