import React, { Fragment } from 'react';
import container from './container';
import {DeletedTitleContainer, OneDeletedTask, DeletedContainer} from './styled';




export const DeletedItems = ({isLoading, deletedTodoListItems}) => {

  const buildDeletedTodoListItems = (allDeletedItems) => {
    return allDeletedItems && allDeletedItems.length>0 ? (
    <ul>
      <DeletedContainer>
      {allDeletedItems.map(y=>
          (<OneDeletedTask><li key={y.id}>
             <DeletedTitleContainer>{y.title} </DeletedTitleContainer>
           </li>
           </OneDeletedTask> 
           ))}
       </DeletedContainer>   
    </ul>) : 'Nothing Deleted yet';
  }

  return (
    <Fragment>

    <div>Deleted Items</div>
    {isLoading ? 'Loading....' : buildDeletedTodoListItems(deletedTodoListItems) }

    </Fragment>
 );
};


export default container(DeletedItems);
