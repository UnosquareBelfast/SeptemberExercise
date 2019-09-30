import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { AddListItem, TodoListItem, SearchBar } from './components';
import container from './container';
import { Link } from 'react-router-dom';
import { MyTodoBoard, TodoListTitle, MyTodoList, MyNavBar, MyNavButtons } from './styled';

export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, todoListItems, setDisplayItems, isLoading }) => {

  const buildTodoListItems = (items, deleteItem) => {
    if(items.length === 0)
      return <span>No Current Todos</span>
    
    return (
      <MyTodoList>
        {items.map(x => (
          <TodoListItem key={x.id} item={x} deleteItem={deleteItem} />)
        )}
      </MyTodoList>
    );
  };

  const addListItem = () => {
    return (
      <AddListItem retrieveTodosForDisplay={retrieveTodosForDisplay} />
    );
  };

  const searchTodos = () => {
    return (
      <SearchBar setDisplayItems={setDisplayItems} />
    );
  };

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>My Todos</TodoListTitle>
        <MyNavBar>
          <MyNavButtons><Link to='/about/'>About Us</Link></MyNavButtons>
          <MyNavButtons><Link to='/deleted/'>Deleted</Link></MyNavButtons>
        </MyNavBar>
        { addListItem() }
        { searchTodos() }
        { isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList) }
      </MyTodoBoard>
    </Fragment>
  );
};

TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  retrieveTodosForDisplay: PT.func,
  setDisplayItems: PT.func,
  todoListItems: PT.array.isRequired,
  taskValue: PT.string.isRequired,
  isLoading: PT.bool.isRequired,
};

export default container(TodoList);
