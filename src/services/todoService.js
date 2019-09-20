import {instance} from '../utilities/Axios';

export const retrieveTodoList = () => {
    return instance.get().then((response) => response.data);
};

export const retrieveTodoListItem = (id) => {
    return instance.get(`/${id}`).then((response) => response.data);
};

export const updateTodoListItem = (id, title) => {
    const todoItem = { title: title };
    return instance.put(`/${id}`, todoItem).then((response) => response.data);
};

export const createTodoListItem = (title) => {
    const todoItem = { title: title };
    return instance.post('', todoItem).then((response) => response.data);
};

export const deleteTodoListItem = (id) => {
    return instance.delete(`${id}`).then((response) => response.data);
};
