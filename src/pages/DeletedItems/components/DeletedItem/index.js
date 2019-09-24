import React, { Fragment } from 'react';
import container from './container';
import { DeleteTitle,DeleteItem,RestoreButton } from './styled';

export const DeletedItem = ({title}) => {

  return (
    <DeleteItem>

      <li>
          <Fragment>
            
              <DeleteTitle>{title}</DeleteTitle>
              <RestoreButton>Restore</RestoreButton>
          </Fragment>
          </li>
    </DeleteItem>
        
 );
};


export default container(DeletedItem);
