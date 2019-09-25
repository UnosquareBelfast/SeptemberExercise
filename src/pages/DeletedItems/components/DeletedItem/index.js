import React, { Fragment } from 'react';
import container from './container';
import { DeleteTitle,DeleteItem,RestoreButton } from './styled';

export const DeletedItem = ({title, id, restoreItem}) => {

  return (
    <DeleteItem>

      <li>
          <Fragment>
            
              <DeleteTitle>{title} {id}</DeleteTitle>
              <RestoreButton onClick = {() => restoreItem(id)}>Restore</RestoreButton>
          </Fragment>
          </li>
    </DeleteItem>
        
 );
};


export default container(DeletedItem);
