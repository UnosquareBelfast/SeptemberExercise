import instance from '../utilities/Axios';

export const retrieveDeletedTodoList = () => {
    return instance.get().then((response) => response.data);
};