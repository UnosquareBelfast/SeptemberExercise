import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem } from './components';
import container from './container';
import { 
  TodoListTitle, TitleContainer,TaskContainer,ToDoItem, ItemButtons, NewTask,AddTaskButton, TaskTextArea
 } from './styled';

export const TodoList = ({ deleteItemFromList, isLoading, todoListItems, updateItemOnList, createItemOnList,handleChange,handleTaskSubmission }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>)
  };

  return (
      <Fragment>
        <TodoListTitle>To Do List</TodoListTitle>
        <NewTask>
          <TaskTextArea><textarea id='newtasktitle'></textarea></TaskTextArea>
          <AddTaskButton><button onClick={() => createItemOnList(document.getElementById('newtasktitle').value)}> Add Task </button></AddTaskButton>
        </NewTask>
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
      </Fragment>
  );
};


TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  createItemOnList: PT.func.isRequired,
  updateItemOnList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
};

export default container(TodoList);
