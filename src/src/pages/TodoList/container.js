import React from 'react';
import { retrieveTodoList, deleteTodoListItem, updateTodoListItem,createTodoListItem } from '../../services/todoService'

const TodoList = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoListItems: [],
        isLoading: true,
      };
    }

    componentDidMount() {
      this.retrieveTodosForDisplay();
    }

    handleChange = (event) => {
      console.log('event.target.value', event.target.value); 
      this.setState({ title: event.target.value });
      console.log('this.state', this.state);
      this.retrieveTodosForDisplay();
    }


    retrieveTodosForDisplay = () => {
      retrieveTodoList().then((todoListItems) => {
        this.setState({ todoListItems, isLoading: false });
      });
    };

    createTodoListItem = () => {
      
    }

    deleteItemFromList = (id) => {
      deleteTodoListItem(id).then(() => {
        const { todoListItems } = this.state;
        this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
      });
    };

    UpdateItemFromList = (id, title) => {
      updateTodoListItem(id,title).then(() => {
        retrieveTodoList().then((todoListItems) => {
          this.setState({ todoListItems,title});
        });
      });
    };

    render() {
      return <Wrapped 
        deleteItemFromList={this.deleteItemFromList}
        UpdateItemFromList={this.UpdateItemFromList}
        handleChange={() => this.handleChange}
        {...this.state} 
      />;
    }
  };

export default TodoList;