import React, { Fragment } from 'react';
import container from './container';
import { 
  TodoListTitle, StyledDiv, CenterDiv
 } from './styled';
import { ToDoCard, Modal } from './styled';
import { GenNavBar } from '../Components/GenNavBar'

  export const Archive = ({isLoading,DeletedListItems,removeDeletedTodoListItem}) => {

    const buildDeletedListItems = (items) => {
      return items && items.length>0 ? (
        <ul>
          {items.map(x=>
            (
              <ToDoCard key={x.id}>
                <StyledDiv><h1>{x.title}</h1> </StyledDiv>
                
                <button onClick= {() => removeDeletedTodoListItem(x.id)} >Recover</button>
              </ToDoCard>
            ))}
        </ul>): (<Modal>No Deleted Tasks</Modal>);
    }

  return (
    <Fragment>
      <GenNavBar></GenNavBar>
      <TodoListTitle>Deleted Tasks</TodoListTitle>
      <CenterDiv>
      {isLoading ? 'loading.......' : buildDeletedListItems(DeletedListItems)}
      </CenterDiv>
  </Fragment>
  );
};


export default container(Archive);
