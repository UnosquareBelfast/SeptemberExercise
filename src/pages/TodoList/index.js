import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem } from './components';
import container from './container';
import {
  TaskContainer, BtnStyle,BottomBarContainer,LeftDiv,LeftSpan
} from './styled';

export const TodoList = ({ deleteItemFromList, isLoading, todoListItems, createItemOnList, searchForTodoList, retrieveTodosForDisplay }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>)
  };

  return (
    <Fragment>
      <TaskContainer>{isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}</TaskContainer>

      <BottomBarContainer>
      <textarea id='newtasktitle'></textarea>
      <LeftSpan>
      <BtnStyle variant="outline-primary" onClick={() => createItemOnList(document.getElementById('newtasktitle').value)}> Add Task</BtnStyle>
      </LeftSpan>
      <textarea id='searchbar'></textarea>
      <BtnStyle variant="outline-primary" onClick={() => searchForTodoList(document.getElementById('searchbar').value)}> Search</BtnStyle>
      
      <BtnStyle variant="outline-primary" onClick={() => retrieveTodosForDisplay()}>Clear Search</BtnStyle>
      </BottomBarContainer>

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
