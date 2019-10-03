import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem } from './components';
import container from './container';
import { 
  TodoListTitle, TodoAdd,TaskContainer,TodoAddButton
 } from './styled';

 export const TodoList = ({ deleteItemFromList, isLoading, todoListItems, createItemOnList,searchForTodoList,retrieveTodosForDisplay }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>)
  };

  return (
    <Fragment>
      <TodoListTitle>To do's</TodoListTitle>
    <TodoAdd>
      <TodoAdd><textarea id='newtasktitle'></textarea></TodoAdd>
      <TodoAddButton variant="outline-primary" onClick={() => createItemOnList(document.getElementById('newtasktitle').value)}> Add Task</TodoAddButton>
    </TodoAdd>
    {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
      <textarea id='searchbar'></textarea>
      <TodoAddButton variant="outline-primary" onClick={() => searchForTodoList(document.getElementById('searchbar').value)}> Search</TodoAddButton>
      <TodoAddButton variant="outline-primary" onClick={() => retrieveTodosForDisplay()}> Refresh?</TodoAddButton>
  </Fragment>
    
      
  );
};

TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  createItemOnList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
};

export default container(TodoList);
