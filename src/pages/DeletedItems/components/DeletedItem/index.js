import React, {Fragment } from 'react';
import container from './container';
import { DeleteTitle, DeleteItem, RestoreButton, RestoreButtonPadding} from './styled';

export const DeletedItem = ({title, id, restoreItem}) => {
    return (
        <DeleteItem>

            <li>
                <Fragment>

                    <DeleteTitle>{title}</DeleteTitle>
                    <RestoreButtonPadding>
                        <RestoreButton onClick = {() => restoreItem(id)}>Restore</RestoreButton>
                    </RestoreButtonPadding>
                </Fragment>
            </li>
        </DeleteItem>
    );
};

export default container (DeletedItem);