import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, AddNewToDoListItem } from './components';
import container from './container';
import { 
  TodoListTitle, TaskContainer
 } from './styled';

export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, isLoading, todoListItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>)
  };

  const newTaskBox = () => {
    return (<AddNewToDoListItem retrieveTodosForDisplay={retrieveTodosForDisplay}></AddNewToDoListItem>)
  };


  return (
      <Fragment>
        <TodoListTitle>To Do List</TodoListTitle>
        {newTaskBox()}
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
      </Fragment>
  );
};


TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
  retrieveTodosForDisplay: PT.func.isRequired,
};

export default container(TodoList);
