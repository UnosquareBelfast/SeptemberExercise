import instance from '../utilities/Axios';

export const retrieveTodoList = () => {
    return instance.get(`todos`).then((response) => response.data);
};

export const retrieveTodoListItem = (id) => {
    return instance.get(`todos/1`).then((response) => response.data);
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
    return instance.delete(`todos/${id}`).then((response) => response.data);
};

export const searchToDoListItems = (searchTerm) =>{
    return instance.get(`todos/search?title=${searchTerm}`).then((response) => response.data);
}