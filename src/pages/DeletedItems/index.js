import React, { Fragment } from 'react';
import container from './container';




export const DeletedItems = ({isLoading, deletedTodoListItems}) => {

  const buildDeletedTodoListItems = (items) => {
    return items && items.length>0 ? (
    <ul>
      {items.map(x=>
          (<li key={x.id}>
             {x.title} 
           </li>
           ))}
           
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
