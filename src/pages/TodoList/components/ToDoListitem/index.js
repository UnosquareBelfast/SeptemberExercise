import React, { Fragment } from 'react';
import container from './container';
import { TitleContainer, ItemButtons, ToDoItem } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {

  return (
    <ToDoItem>
      <li>  
        {isUpdating ? (
          <Fragment>
            <input type='text' onChange={(event) => onTitleChanged(event)} value={title}></input> 
            <button onClick={() => saveItem(id)}>Save</button>
            <button onClick={() => toggleUpdateMode()}>Cancel</button>
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
