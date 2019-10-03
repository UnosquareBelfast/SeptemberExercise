import instance from '../utilities/Axios';

export const retrieveTodoList = () => {
    return instance.get(`todos`).then((response) => response.data);
};

export const retrieveTodoListItem = (id) => {
    return instance.get(`todos/1`).then((response) => response.data);
};

export const updateTodoListItem = (id, title) => {
    const todoItem = { title: title };
    return instance.put(`todos/${id}`, todoItem).then((response) => response);
};

export const createTodoListItem = (title) => {
    const todoItem = { title: title };
    return instance.post('todos/', todoItem).then((response) => response.data);
};

export const deleteTodoListItem = (id) => {
    return instance.delete(`todos/${id}`).then((response) => response);
};

export const searchToDoListItems = (searchTerm) =>{
    return instance.get(`todos/search?title=${searchTerm}`).then((response) => response.data);
}