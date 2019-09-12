import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem } from './components';
import container from './container';
import { MyTodoBoard, TodoListTitle, AddTodoArea, AddTodo, AddTaskText, TextArea, AddTaskButton, MyAddButton, MyTodoList } from './styled';

export const TodoList = ({ deleteItemFromList, createItemOnList, isLoading, todoListItems, handleChange,  handleTaskSubmission}) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (
      <MyTodoList>
        {items.map(x => (
          <TodoListItem key={x.id} item={x} deleteItem={deleteItem} />)
        )}
      </MyTodoList>)
  };

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>Todo List</TodoListTitle>
        <AddTodoArea>
          <AddTodo>
            <AddTaskText><TextArea id='newTaskTitle'></TextArea></AddTaskText>
            <AddTaskButton><MyAddButton onClick={() => createItemOnList(document.getElementById('newTaskTitle').value)}>Add</MyAddButton></AddTaskButton>
          </AddTodo>
        </AddTodoArea>
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
      </MyTodoBoard>
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
