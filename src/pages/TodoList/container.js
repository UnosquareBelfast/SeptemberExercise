import React from 'react';
import { retrieveTodoList, deleteTodoListItem, createTodoListItem, searchForTodoListItem } from '../../services/todoService';

const TodoList = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoListItems: [],
        isLoading: true,
        value:'',
        Found: false,
      };
    }

    componentDidMount() {
      this.retrieveTodosForDisplay();
    }

    retrieveTodosForDisplay = () => {
      retrieveTodoList().then((todoListItems) => {
        this.setTodoListItems(todoListItems);
      });
    };

    searchForTodoList = (title) => {
      searchForTodoListItem(title).then((todoListItems) => { 
        this.setTodoListItems(todoListItems);
      });
    };

    deleteItemFromList = (id) => {
    deleteTodoListItem(id).then(() => {
       const { todoListItems } = this.state;
        this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
      });
    };

    deleteAllItemsFromList = (id) => {
      deleteTodoListItem(id).then(() => {
         const { todoListItems } = this.state;
          this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
        });
      };

    createItemOnList = (title) => {
      createTodoListItem(title).then(() => {
        this.retrieveTodosForDisplay();
      })
    }

    setTodoListItems = (todoListItems) => {
      console.log(todoListItems);
      this.setState({ todoListItems, isLoading: false });
    }
    
    render() {
      return <Wrapped 
      deleteItemFromList={this.deleteItemFromList}
      UpdateItemFromList={this.UpdateItemFromList}
      createItemOnList={this.createItemOnList}
      searchForTodoList={this.searchForTodoList}
      retrieveTodosForDisplay={this.retrieveTodosForDisplay}
      {...this.state} 
      />;
    }
  };

export default TodoList;