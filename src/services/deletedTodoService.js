import instance from '../utilities/Axios';

export const recieveDeletedTodoList = () => {
    return instance.get('deletedtodos/').then((Response) => Response.data);
};

export const recoverTodoListItem = (id) => {
    return instance.get(`todos/recover/${id}`).then((response) => response.data);
};