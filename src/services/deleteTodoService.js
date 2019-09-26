import instance from '../utilities/Axios';

export const retrieveDeletedTodoList = () => {
    return instance.get('deletedtodos/').then((response) => response.data);
};

export const recoverTodoListItem = (id) => {
    return instance.get(`todos/recover/${id}`).then((response) => response.data);
};