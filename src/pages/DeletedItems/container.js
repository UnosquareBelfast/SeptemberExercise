import React from 'react';
import {retrieveDeletedTodoList} from '../../services/deletedTodoService';
import {restoreDeletedTodo} from '../../services/deletedTodoService';

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

    restoreDeletedTodoListItem = (id) => {
      restoreDeletedTodo(id).then(() => {
        const {deletedTodoListItems} = this.state;
        this.setState({
          deletedTodoListItems: deletedTodoListItems.filter(x=>x.id!==id)
        });
      })
    }

  

    render() {
      
      return <Wrapped 
      retrieveDeletedTodosForDisplay={this.retrieveDeletedTodosForDisplay}
      restoreDeletedTodoListItem={this.restoreDeletedTodoListItem}
      {...this.state} 
      />;
    }
  };

export default DeletedItems;