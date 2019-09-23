import React, { Fragment } from 'react';
import container from './container';
import {DeletedTitleContainer, DeletedTask, DeletedContainer} from './styled';




export const DeletedItems = ({isLoading, deletedTodoListItems}) => {

  const buildDeletedTodoListItems = (items) => {
    return items && items.length>0 ? (
    <ul>
      <DeletedContainer>
      {items.map(x=>
          (<DeletedTask><li key={x.id}>
             <DeletedTitleContainer>{x.title} </DeletedTitleContainer>
           </li>
           </DeletedTask> 
           ))}
       </DeletedContainer>   
    </ul>) : 'Nothing Deleted yet';
  }

  return (
    <Fragment>

    <div>Deleted Items</div>
    <div></div>
    {isLoading ? 'Loading....' : buildDeletedTodoListItems(deletedTodoListItems) }

    </Fragment>
 );
};


export default container(DeletedItems);
