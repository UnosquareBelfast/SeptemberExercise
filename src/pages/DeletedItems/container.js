import React from 'react';
import {retrieveDeletedTodoList} from '../../services/deletedTodoService';


const DeletedItems = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        deletedTodoListItems: [],
        isLoading: true,
      };
    }

    componentDidMount() {
      this.retrieveDeletedTodosForDisplay();
    }

    retrieveDeletedTodosForDisplay = () => {
      retrieveDeletedTodoList().then((deletedTodoListItems) => {
        this.setState({ 
          deletedTodoListItems: deletedTodoListItems.sort(function(a,b) {return a.id-b.id}),
          isLoading: false });
      });
    };


  

    render() {
      
      return <Wrapped 
      {...this.state} 
      />;
    }
  };

export default DeletedItems;