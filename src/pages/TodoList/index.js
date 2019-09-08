import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListTitle } from './styled';
import container from './container';

export const TodoList = ({ isLoading, todoListItems }) => {

  const buildTodoListItems = (items) => {
      return (
      <ul>
        {items.map(x => (<li key={x.id}>{x.title}</li>))}
      </ul>)
  }

  return (
      <Fragment>
        <TodoListTitle>Todo List</TodoListTitle>
        {isLoading ? 'Loading' : buildTodoListItems(todoListItems)}
      </Fragment>
  );
};

TodoList.propTypes = {
    isLoading: PT.bool.isRequired,
    todoListItems: PT.array.isRequired,
};

export default container(TodoList);
