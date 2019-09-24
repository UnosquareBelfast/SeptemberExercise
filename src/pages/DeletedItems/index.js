import React, { Fragment } from 'react';
import container from './container';
import {DeletedContainer} from './styled';
import {DeletedItem} from './components';




export const DeletedItems = ({isLoading, deletedTodoListItems}) => {

  const buildDeletedTodoListItems = (allDeletedItems) => {
    return allDeletedItems && allDeletedItems.length>0 ? (
    <ul>
      <DeletedContainer>
      {allDeletedItems.map(y=>
          (<DeletedItem key={y.id} item={y}></DeletedItem>
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
