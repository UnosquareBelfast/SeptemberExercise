import React, { Fragment } from 'react';
import container from './container';
import { DeleteButton, EditButton, ToDoCard, CardRight,CardLeft } from './styled';
import Moment from 'react-moment';
import 'moment-timezone';

export const TodoListItem = ({ id, title, date_added, displayText, deleteItem, saveItem, toggleUpdateMode, isUpdating, onTitleChanged }) => {
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
          <p><Moment format="DD/MM/YYYY">{date_added}</Moment></p>
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