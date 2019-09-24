import React, { Fragment } from 'react';
import container from './container';
import { DeleteButton, EditButton, ToDoCard, CardRight,CardLeft } from './styled';

export const TodoListItem = ({ id, title, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {
  return (
    <li key={id}>
      {isUpdating ? (
        <Fragment>
          <ToDoCard>
          <input type='text' value={title} onChange={(event) => onTitleChanged(event)} ></input>
          <button onClick={() => saveItem(id)}>Save</button>
          <DeleteButton onClick={() => toggleUpdateMode(id)}>Cancel</DeleteButton>
          <br />
          </ToDoCard>
        </Fragment>) : 
        (<Fragment>
          <ToDoCard>
            
            <CardLeft>
          {title}
          </CardLeft>


          <CardRight>
            <EditButton onClick={() => toggleUpdateMode(id)}>Edit</EditButton>
            <DeleteButton onClick={() => deleteItem(id)}>X</DeleteButton>
          
          </CardRight>
       
        </ToDoCard>
        </Fragment>)
      }
    </li>
  );
};


export default container(TodoListItem);