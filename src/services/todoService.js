import instance from '../utilities/Axios';

export const todoService  = {
    retrieveTodoList : async () => {
        const response = await instance.get();
        return response.data;
    }
}

export const retrieveTodoList = () => {
    return instance.get().then((response) => response.data);
  };



export default todoService;