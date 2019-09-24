import React, { Fragment } from 'react';
import container from './container';
import { Link } from "react-router-dom";
import { 
  TodoListTitle,
  TodoNavBar,
  TodoAdd,
  DeleteToDo
 } from './styled';

 export const DeletedLog = ({isLoading,DeletedListItems,removeDeletedTodoListItem}) => {

  const buildDeletedListItems = (items) => {
    return items && items.length>0 ? (
      <ul>
        {items.map(x=>
          (
            <DeleteToDo key={x.id}>
              {x.title} <button onClick= {() => removeDeletedTodoListItem(x.id)} >Recover</button>
            </DeleteToDo>
          ))}
      </ul>): 'No Dice';
  }


  return (
    <Fragment>
      <TodoListTitle>DeleteLog</TodoListTitle>
      <TodoAdd>
        <TodoNavBar ><Link to='/'>home</Link></TodoNavBar>
      </TodoAdd>
      {isLoading ? 'loading.......' : buildDeletedListItems(DeletedListItems)}
  </Fragment>
  );
};

export default container(DeletedLog);
