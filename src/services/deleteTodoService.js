import {deleteInstance} from '../utilities/Axios';

export const retrieveDeletedTodoList = () => {
    return deleteInstance.get().then((response) => response.data);
};