import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, SearchBar } from './components';
import container from './container';
import {
  TodoListTitle, TaskContainer, TodoListSubTitle, NewTask, AddToDoButtonContainer
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
      <NewTask>
      <textarea id='newtask'></textarea>
      <AddToDoButtonContainer>
      <button onClick={() => createItemOnList(document.getElementById('newtask').value)}> Add Task </button>
      </AddToDoButtonContainer>
      {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList, TodoAdd)}
      </NewTask>
      {searchBox()}
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
  retrieveTodosForDisplay: PT.func.isRequired,
  setDisplayItems: PT.func.isRequired,
};

export default container(TodoList);
