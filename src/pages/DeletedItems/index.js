import React, { Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { MyTodoBoard, TodoListTitle, MyNavBar, MyNavButtons, MyDeletedTodoList, MyDeletedTodoNotes, MyDeletedTodos, MyDeleteActions, MyDeleteButton } from './styled';

export const DeletedItems = ({ deletedTodoListItems, removeDeletedTodoListItem, isLoading }) => {

  const buildDeletedTodoListItems = (items) => {
    return items && items.length>0 ? (
      <MyDeletedTodoList>
        {items.map( x => (
          <MyDeletedTodoNotes key={x.id}>
            <MyDeleteActions>
              <MyDeleteButton onClick={() => removeDeletedTodoListItem(x.id)}>Recover</MyDeleteButton>
            </MyDeleteActions>
            <MyDeletedTodos>{x.title}</MyDeletedTodos>
          </MyDeletedTodoNotes>
          ))}
      </MyDeletedTodoList>
    ) : 'Nothing has been deleted.';
  };

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>Bin</TodoListTitle>
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
