import React, { Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { MyTodoBoard, TodoListTitle, MyDeletedTodoList, MyDeletedTodoNotes, MyDeletedTodos, MyNavBar, MyNavButtons } from './styled';

export const DeletedItems = ({ deletedTodoListItems, isLoading }) => {

  const buildDeletedTodoListItems = (items) => {
    return items && items.length>0 ? (
      <MyDeletedTodoList>
        {items.map( x => (
          <MyDeletedTodoNotes>
            <li key={x.id}>
              <MyDeletedTodos>{x.title}</MyDeletedTodos>
            </li>
          </MyDeletedTodoNotes>
          ))}
      </MyDeletedTodoList>
    ) : 'Nothing has been deleted.';
  };

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>Deleted Todo List</TodoListTitle>
        <MyNavBar>
          <MyNavButtons><Link to='/'>Home</Link></MyNavButtons>
          <MyNavButtons><Link to='/about/'>About Us</Link></MyNavButtons>
        </MyNavBar>
        {isLoading ? 'Loading...' : buildDeletedTodoListItems(deletedTodoListItems)}
      </MyTodoBoard>
    </Fragment>
  );
};

export default container(DeletedItems);
