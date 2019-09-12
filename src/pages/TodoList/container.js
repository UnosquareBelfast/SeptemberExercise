import React from 'react';
import { retrieveTodoList, deleteTodoListItem, createTodoListItem } from '../../services/todoService';

const TodoList = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoListItems: [],
        isLoading: true,
        value:'',
      };
    }

    componentDidMount() {
      this.retrieveTodosForDisplay();
    }

    retrieveTodosForDisplay = () => {
      retrieveTodoList().then((todoListItems) => {
        this.setState({ todoListItems, isLoading: false });
      });
    };

    deleteItemFromList = (id) => {
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
    render() {
      return <Wrapped 
      deleteItemFromList={this.deleteItemFromList}
      UpdateItemFromList={this.UpdateItemFromList}
      createItemOnList={this.createItemOnList}
      {...this.state} 
      />;
    }
  };

export default TodoList;