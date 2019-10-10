import React from 'react';
import { retrieveUsers } from '../../services/usersService';

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
   
    render() {
      return <Wrapped 
      retrieveUsersToDisplay= {this.retrieveUsersToDisplay}
      {...this.state} 
      />;
    }
  };

export default Users;