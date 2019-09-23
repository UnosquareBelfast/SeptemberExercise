import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem } from './components';
import { Link } from "react-router-dom";
import container from './container';
import { 
  TodoListTitle, TodoAdd,TaskContainer,TodoAddButton,TodoNavBar
 } from './styled';

 export const TodoList = ({ deleteItemFromList, isLoading, todoListItems, createItemOnList }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>)
  };

  return (
    <Fragment>
      <TodoListTitle>To do's</TodoListTitle>
      <TodoNavBar ><Link to='/about/'>About us</Link></TodoNavBar>
      <TodoNavBar ><Link to='/DeletedLog/'>DeletedLog</Link></TodoNavBar>
    <TodoAdd>
      <TodoAdd><textarea id='newtasktitle'></textarea></TodoAdd>
      <TodoAddButton variant="outline-primary" onClick={() => createItemOnList(document.getElementById('newtasktitle').value)}> Add Task</TodoAddButton>
    </TodoAdd>
    {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
    
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
