import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import container from './container';
import { 
  TodoListTitle,
  TodoListBody,
  TodoListhead,
  Todobuttons
 } from './styled';

export const TodoList = ({ deleteItemFromList, isLoading, todoListItems,UpdateItemFromList, handleChange }) => {

  const buildTodoListItems = (items) => {
    return items && items.length > 0 ? (
      <ul>
        {items.map(x => 
          (<TodoListBody key={x.id}><li 
          >
            {x.title}
            <br/>
            <button onClick={() => deleteItemFromList(x.id)}>Delete</button>
            <br/>
            <input type="text" id='updatetext' name= "updatedText" onChange={handleChange("updatedText")}></input>
            <button onClick={() => UpdateItemFromList(x.id,document.getElementById('updatetext').value)}>Update</button>
          </li>
          </TodoListBody>
        ))}
      </ul>) : 'Nothing to do.';

      
  }

  return (
      <Fragment>
        <TodoListTitle>Todo List</TodoListTitle>
        <TodoListhead>I be testing</TodoListhead>
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
