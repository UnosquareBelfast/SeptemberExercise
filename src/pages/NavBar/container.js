import React from 'react';

const NavBar = (Wrapped) =>
  class extends React.Component {
       
    render() {
      return <Wrapped 
      />;
    }
  };

export default NavBar;