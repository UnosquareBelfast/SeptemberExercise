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
        console.log(deletedTodoListItems);
        this.setState({ 
          deletedTodoListItems: deletedTodoListItems.sort(function(c,d) {return c.id-d.id}),
          isLoading: false });
      });
    };

  

    render() {
      
      return <Wrapped 
      //recoverDeletedTodoListItem = {this.recoverDeletedTodoListItem}
      retrieveDeletedTodosForDisplay={this.retrieveDeletedTodosForDisplay}
      {...this.state} 
      />;
    }
  };

export default DeletedItems;