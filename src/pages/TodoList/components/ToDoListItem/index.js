import React, { Fragment } from 'react';
import container from './container';
import { TitleContainer, ItemButtonSpacing, ToDoItem,ItemButton } from './styled';

const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {


  return (
    <ToDoItem>
    <li>  
      {isUpdating ? (
        <Fragment>
          <input type='text' onChange={(event) => onTitleChanged(event)} value={title}></input> 
          <button onClick={() => saveItem(id,title)}>Save</button>
          <button onClick={() => toggleUpdateMode()}>Cancel</button>
        </Fragment>) :    
        (<Fragment>
          <TitleContainer>{displayText}</TitleContainer>
          <ItemButtonSpacing>
            <ItemButton onClick={() => deleteItem(id)}>Delete</ItemButton>
            <ItemButton onClick={() => toggleUpdateMode()}>Update</ItemButton>
          </ItemButtonSpacing>
        </Fragment>)
      }
      </li>
  </ToDoItem>
      
  );
};
export default container(TodoListItem);
