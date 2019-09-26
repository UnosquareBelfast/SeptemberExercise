import React, { Fragment } from 'react';
import container from './container';
import { Link } from "react-router-dom";
import { 
  TodoListTitle,
  LinkButton,
  RecoverButton,
  DeleteToDo,
  NumberOfTodo
 } from './styled';

 export const DeletedLog = ({isLoading,DeletedListItems,removeDeletedTodoListItem}) => {

  const buildDeletedListItems = (items) => {
    return items && items.length>0 ? (
      <ul>
        {items.map(x=>
          (
            <DeleteToDo key={x.id}>
              {x.title} <RecoverButton onClick= {() => removeDeletedTodoListItem(x.id)} >Recover</RecoverButton>
            </DeleteToDo>
          ))}
      </ul>): 'No Dice';
  }

  const numberOfDeletedObjects = (items) => {
    return items.length;
  }


  return (
    <Fragment>
      <TodoListTitle>DeleteLog</TodoListTitle>
        <LinkButton ><Link to='/'>home</Link></LinkButton>
      {isLoading ? 'loading.......' : buildDeletedListItems(DeletedListItems)}
      <NumberOfTodo>Number of deleted Todos: {numberOfDeletedObjects(DeletedListItems)}</NumberOfTodo>
  </Fragment>
  );
};

export default container(DeletedLog);
