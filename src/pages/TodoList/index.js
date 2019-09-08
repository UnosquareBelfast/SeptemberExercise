import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import container from './container';
import { 
  TodoListTitle
 } from './styled';

export const TodoList = ({ deleteItemFromList, isLoading, todoListItems }) => {

  const buildTodoListItems = (items) => {
      return items && items.length > 0 ? (
      <ul>
        {items.map(x => 
          (<li key={x.id}>
            {x.title}
            <button onClick={() => deleteItemFromList(x.id)}>Delete</button>
          </li>
        ))}
      </ul>) : 'Nothing to do.';
  }

  return (
      <Fragment>
        <TodoListTitle>Todo List</TodoListTitle>
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems)}
      </Fragment>
  );
};

TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
};

export default container(TodoList);
