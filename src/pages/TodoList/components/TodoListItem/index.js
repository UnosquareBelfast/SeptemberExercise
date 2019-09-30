import React, { Fragment } from 'react';
import container from './container';
import { 
  TitleContainer,
  ItemButtons,
  Cancelbutton,
  ToDoItem,
  UpdateTaskTextArea,
  Deletebutton,
  Updatebutton,
  Savebutton,
  UpdateButtonPadding
 } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, OnTitleChanged }) => {

      return(
      <ToDoItem>
        <li>
        { isUpdating ? ( 
        <Fragment>
          <UpdateTaskTextArea>
          <textarea onChange={(event) => OnTitleChanged(event)} value={title}></textarea>
          </UpdateTaskTextArea>
          <UpdateButtonPadding>
          <Savebutton onClick={() => saveItem(id, title)}>Save</Savebutton>
          <Cancelbutton onClick={() => toggleUpdateMode()}>Cancel</Cancelbutton> 
          </UpdateButtonPadding>
        </Fragment>) :
        (
          <Fragment>
            <TitleContainer>{displayText}</TitleContainer>
            <ItemButtons>
              <Deletebutton onClick={() => deleteItem(id)}>Delete</Deletebutton>
              <Updatebutton onCLick={() => toggleUpdateMode()}>Update</Updatebutton>
            </ItemButtons>
          </Fragment>)     
        }
        </li>
        </ToDoItem>
      );
};

export default container(TodoListItem);
