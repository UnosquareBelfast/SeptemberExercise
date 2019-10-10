import instance from '../utilities/Axios';

export const retrieveUsers = () => {
    return instance.get('users/').then((response) => response.data);
};