import React, { Fragment } from 'react';
import { PropTypes as PT } from 'prop-types';
import { TodoListItem, AddNewToDoListItem,SearchBar } from './components';
import container from './container';
import { 
  TodoListTitle, TaskContainer, NothingMessage
 } from './styled';


export const TodoList = ({ retrieveTodosForDisplay, deleteItemFromList, isLoading, todoListItems, setDisplayItems }) => {

  const buildTodoListItems = (items, deleteItem) => {
    return items && items.length>0 ? (<ul><TaskContainer>{items.map(x => (<TodoListItem key={x.id} item={x} deleteItem={deleteItem} />))}</TaskContainer></ul>) : <NothingMessage>Nothing to do</NothingMessage>;
  };

  const newTaskBox = () => {
    return (<AddNewToDoListItem retrieveTodosForDisplay={retrieveTodosForDisplay}></AddNewToDoListItem>)
  };

  const searchBox = () => {
    return (<SearchBar setDisplayItems={setDisplayItems} />)
  };

  // const searchResults=(results)=>{
  //   return results && results.length>0 ? (<ul>{results.map(x=> (<li>{results.title}</li>))}</ul>
  //     ) : <div>Nothing to see here</div>
  //}
  


  return (
      <Fragment>

        
        <TodoListTitle>To Do List</TodoListTitle>

        
        {newTaskBox()}
        {searchBox()}
        {/* {searchResults(todoListItems)} */}
        {isLoading ? 'Loading...' : buildTodoListItems(todoListItems, deleteItemFromList)}
        
      </Fragment>
  );
};


TodoList.propTypes = {
  deleteItemFromList: PT.func.isRequired,
  isLoading: PT.bool.isRequired,
  todoListItems: PT.array.isRequired,
  retrieveTodosForDisplay: PT.func.isRequired,
  setDisplayItems: PT.func.isRequired,
};

export default container(TodoList);
