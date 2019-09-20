import React, { Fragment } from 'react';
import container from './container';
import { TitleContainer, ItemButtonsPadding, ToDoItem, UpdateButtonPadding, UpdateTaskTextArea, DeleteButton, UpdateButton, CancelButton, SaveButton } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {

  return (
    <ToDoItem>
      <li>  
        {isUpdating ? (
          <Fragment>
            <UpdateTaskTextArea>
              <textarea onChange={(event) => onTitleChanged(event)} value={title}></textarea>
            </UpdateTaskTextArea>
            <UpdateButtonPadding>
            <CancelButton onClick={() => toggleUpdateMode()}>Cancel</CancelButton>
              <SaveButton onClick={() => saveItem(id, title)}>Save</SaveButton>
              
            </UpdateButtonPadding>
          </Fragment>) :    
          (<Fragment>
            <TitleContainer>{displayText}</TitleContainer>
            <ItemButtonsPadding>
              <DeleteButton onClick={() => deleteItem(id)}>Delete</DeleteButton>
              <UpdateButton onClick={() => toggleUpdateMode()}>Update</UpdateButton>
            </ItemButtonsPadding>
          </Fragment>)
        }
        </li>
    </ToDoItem>
 );
};


export default container(TodoListItem);
