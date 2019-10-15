import instance from '../utilities/Axios';

export const retrieveUsers = () => {
    return instance.get('users/').then((response) => response.data);
};

export const createUsers = (username, email, password) => {
    const userItem = { username: username, email: email, password: password };
    return instance.post('users/',userItem).then((response) => response.data);
};

export const getUser = (username) => {
    const usernItem = {username: username};
    return instance.get(`users/username?username=${username}`)
    .then((response) => response.data);
}

export const loginUser = (username, password) => {

}