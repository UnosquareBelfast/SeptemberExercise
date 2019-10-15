import React from 'react';
import { retrieveUsers,createUsers,getUser } from '../../services/usersService';

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

    getUsertodisplay = (username) => {
      
      getUser(username).then(() => {
        console.log(username);
        this.retrieveUsersToDisplay();
      })
    }
   
    render() {
      return <Wrapped 
      retrieveUsersToDisplay= {this.retrieveUsersToDisplay}
      createUserOnList= {this.createUserOnList}
      getUsertodisplay={this.getUsertodisplay}
      {...this.state} 
      />;
    }
  };

export default Users;