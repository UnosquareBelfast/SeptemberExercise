import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, AddToDo, SearchBar } from './components';
import container from './container';
import {
  TodoListTitle, ToDoCard, CenterDiv, Modal, StyledDiv
} from './styled';
import { Link } from 'react-router-dom';

export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, isLoading, todoListItems, setDisplayItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
    if (items.length === 0) {
      return <Modal>No New Tasks</Modal>
    } else {
      return (
        <ul>
          <StyledDiv>
            {items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}
          </StyledDiv>
        </ul>)
    }
  };

  const AddTodoListItems = () => {
    return (
      <AddToDo retrieveTodosForDisplay={retrieveTodosForDisplay}></AddToDo>
    )
  };

  const SearchTodoItems = () => {
    return (
      <SearchBar setDisplayItems={setDisplayItems}></SearchBar>
    )
  };

  return (
    <Fragment>
      <CenterDiv>
        <Link to='/about/'><button >About Us</button></Link>
        <Link to='/archive/'><button >Archive</button></Link>
        <TodoListTitle>Todo List</TodoListTitle>
        {SearchTodoItems()}
        {AddTodoListItems()}
        <ToDoCard>{isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}</ToDoCard>
        
      </CenterDiv>
    </Fragment>
  );
};

TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
  taskValue: PT.string.isRequired,
  retrieveTodosForDisplay: PT.func,
  setDisplayItems: PT.func,
};

export default container(TodoList);
