import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, SearchBar } from './components';
import container from './container';
import {
  TodoListTitle, TaskContainer, TodoListSubTitle,
} from './styled';

export const TodoList = ({ deleteItemFromList, isLoading, todoListItems, createItemOnList, TodoAdd, retrieveTodosForDisplay, setDisplayItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer>
    </ul>)
  };

  const searchBox = () => {
    return (<SearchBar setDisplayItems={setDisplayItems} retrieveTodosForDisplay={retrieveTodosForDisplay} />)
  };

  return (
    <Fragment>
      <TodoListTitle>To Do List</TodoListTitle>
      <TodoListSubTitle>Emer's To Do List</TodoListSubTitle>
      {searchBox()}
      <textarea id='newtask'></textarea>
      <button variant="outline-primary" onClick={() => createItemOnList(document.getElementById('newtask').value)}> Add Task </button>
      {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList, TodoAdd)}
    </Fragment>
  );
};


TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  createItemOnList: PT.func.isRequired,
  updateItemOnList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
  ToDoItem: PT.func.isRequired,
};

export default container(TodoList);
