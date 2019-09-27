import React from 'react';
// import { retrieveTodoList, deleteTodoListItem } from '../../services/todoService'

const GenNavBar = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }


    render() {
      return <Wrapped 
       
        {...this.state} 
      />;
    }
  };

export default GenNavBar;