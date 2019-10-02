import instance from '../utilities/Axios';

export const retrieveDeletedTodoList = () => {
    return instance.get(`deletedtodos/`).then((response) => response.data);
};

export const restoreDeletedTodo = (id) => {
    return instance.get(`todos/recover/${id}`).then((response) => response.data);
};