import React from 'react';
import { retrieveUsers,createUsers } from '../../services/usersService';

const Users = (Wrapped) =>
  class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        UserListItems: [],
        isLoading: true
      }

      
    }

    retrieveUsersToDisplay = () => {
      retrieveUsers().then((UserListItems) => {
        this.setUserListItems(UserListItems);
      });
    };

    setUserListItems = (UserListItems) => {
      console.log(UserListItems);
      this.setState({ UserListItems, isLoading: false });
    }

    createUserOnList = (username,email,password) => {
      createUsers(username,email,password).then(() => {
        this.retrieveUsersToDisplay();
      })
    }
   
    render() {
      return <Wrapped 
      retrieveUsersToDisplay= {this.retrieveUsersToDisplay}
      createUserOnList= {this.createUserOnList}
      {...this.state} 
      />;
    }
  };

export default Users;