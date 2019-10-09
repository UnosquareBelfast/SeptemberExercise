import React from 'react';

const Users = (Wrapped) =>
  class extends React.Component {
   
    render() {
      return <Wrapped />;
    }
  };

export default Users;