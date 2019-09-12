import React, { Fragment } from 'react';
import container from './container';
import { TitleContainer, ItemButtons, ToDoItem, UpdateButtons, UpdateTaskTextArea } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {

  return (
    <ToDoItem>
      <li>  
        {isUpdating ? (
          <Fragment>
            <UpdateTaskTextArea>
              <textarea onChange={(event) => onTitleChanged(event)} value={title}></textarea>
            </UpdateTaskTextArea>
            <UpdateButtons>
              <button onClick={() => saveItem(id, title)}>Save</button>
              <button onClick={() => toggleUpdateMode()}>Cancel</button>
            </UpdateButtons>
          </Fragment>) :    
          (<Fragment>
            <TitleContainer>{displayText}</TitleContainer>
            <ItemButtons>
              <button onClick={() => deleteItem(id)}>Delete</button>
              <button onClick={() => toggleUpdateMode()}>Update</button>
            </ItemButtons>
          </Fragment>)
        }
        </li>
    </ToDoItem>
 );
};


export default container(TodoListItem);
