import React from 'react';
import { retrieveDeletedTodoList, recoverTodoListItem } from '../../services/deleteTodoService'

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

    removeDeletedTodoListItem = (id) => {
      recoverTodoListItem(id).then(() => {
        this.retrieveDeletedTodosForDisplay()
      });
    };

    render() {
      return <Wrapped
        removeDeletedTodoListItem = {this.removeDeletedTodoListItem} 
        {...this.state} 
      />;
    }
  };

export default DeletedItems;