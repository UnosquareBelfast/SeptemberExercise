import React from 'react';
import { retrieveDeletedTodoList } from '../../services/deleteTodoService'

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
        deletedTodoListItems.sort(function(a, b){
          return a.id - b.id;
        });
        this.setState({ deletedTodoListItems, isLoading: false });
      });
    };

    render() {
      return <Wrapped 
        {...this.state} 
      />;
    }
  };

export default DeletedItems;