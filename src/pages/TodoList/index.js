import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { AddListItem, TodoListItem } from './components';
import container from './container';
import { MyTodoBoard, TodoListTitle, MyTodoList } from './styled';
import { retrieveTodoList } from '../../services/todoService';

export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, isLoading, todoListItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
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
    )
  }

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>Todo List</TodoListTitle>
        {/* <AddListItem/> */}
        { addListItem() }
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
      </MyTodoBoard>
    </Fragment>
  );
};

TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  createItemOnList: PT.func.isRequired,
  retrieveTodosForDisplay: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
};

export default container(TodoList);
