import React, { Fragment } from 'react';
import container from './container';
import { Link } from "react-router-dom";
import { 
  TodoListTitle,
  TodoNavBar,
  TodoAdd

 } from './styled';

 export const DeletedLog = ({isLoading,DeletedListItems}) => {

  const buildDeletedListItems = (items) => {
    return items && items.length>0 ? (
      <ul>
        {items.map(x=>
          (
            <li key={x.id}>
              {x.title}
            </li>
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
