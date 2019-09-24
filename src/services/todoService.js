import instance from '../utilities/Axios';

//get item list
export const retrieveTodoList = () => {
    return instance.get().then((response) => response.data);
};

//get a specific item
export const retrieveTodoListItem = (id) => {
    return instance.get(`/${id}`).then((response) => response.data);
};

//edit item
export const updateTodoListItem = (id, title) => {
    const todoItem = { title: title };
    return instance.put(`/${id}`, todoItem).then((response) => response.data);
};

//add item
export const createTodoListItem = (title) => {
    const todoItem = { title: title };
    return instance.post('', todoItem).then((response) => response.data);
};

//delete item
export const deleteTodoListItem = (id) => {
    return instance.delete(`${id}`).then((response) => response.data);
};


//add item
export const retrieveFilteredTodoListItem = (title) => {
    return instance.get(`/search?title=${title}`)
    .then((response) => response.data)
    .catch((error)=>{
        console.log(error);
        return Promise.reject(error);
})
};