import instance from '../utilities/Axios';

//get item list
export const retrieveTodoList = () => {
    return instance.get(`/todos/`).then((response) => response.data).catch(()=> []);
};

//edit item
export const updateTodoListItem = (id, title) => {
    const todoItem = { title: title };
    return instance.put(`/todos/${id}`, todoItem).then((response) => response.data);
};

//add item
export const createTodoListItem = (title) => {
    const todoItem = { title: title };
    return instance.post('/todos/', todoItem).then((response) => response.data);
};

//delete item
export const deleteTodoListItem = (id) => {
    return instance.delete(`/todos/${id}`).then((response) => response.data);
};


//add item
export const retrieveFilteredTodoListItem = (title) => {
    return instance.get(`/todos/search?title=${title}`)
    .then((response) => response.data)
    .catch((error)=>{
        console.log(error);
})
};