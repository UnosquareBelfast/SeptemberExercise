import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, AddToDo } from './components';
import { GenNavBar } from '../Components/GenNavBar'
import container from './container';
import {
  TodoListTitle, ToDoCard, CenterDiv, Modal, StyledDiv
} from './styled';

export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, isLoading, todoListItems, setDisplayItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
    if(!items){
      return <Modal>No New Tasks</Modal>
    }
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

  const buildNavBar = () => {
    return (<GenNavBar setDisplayItems={setDisplayItems} showSearch={true}></GenNavBar>)
  };

  const AddTodoListItems = () => {
    return (
      <AddToDo retrieveTodosForDisplay={retrieveTodosForDisplay}></AddToDo>
    )
  };



  return (
    <Fragment>
      <CenterDiv>
        {buildNavBar()}
        <TodoListTitle>Todo List</TodoListTitle>
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
