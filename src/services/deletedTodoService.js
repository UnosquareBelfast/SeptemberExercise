import instance from '../utilities/Axios';

export const recieveDeletedTodoList = () => {
    return instance.get('deletedtodos/').then((Response) => Response.data);
};