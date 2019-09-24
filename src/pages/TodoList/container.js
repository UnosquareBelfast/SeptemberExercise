import React from 'react';
import { retrieveTodoList, deleteTodoListItem } from '../../services/todoService'

const TodoList = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        todoListItems: [],
        isLoading: true,
        taskValue: ''
      };
    }

    componentDidMount() {
      this.retrieveTodosForDisplay();
    }

    retrieveTodosForDisplay = () => {
      retrieveTodoList().then((todoListItems) => {
        todoListItems.sort(function (a, b) {
          return a.id - b.id;
        });
        this.setState({ todoListItems, isLoading: false });
      })
    };

    setDisplayItems = (todoListItems) => {
      this.setState({
        todoListItems: todoListItems.sort(function(a,b) {return a.id-b.id}),
        isLoading: false
      });
    };

    deleteItemFromList = (id) => {
      deleteTodoListItem(id).then(() => {
        const { todoListItems } = this.state;
        this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
      });
    };

    render() {
      return <Wrapped 
        deleteItemFromList={this.deleteItemFromList}
        createTodoListItem={this.createTodoListItem}
        retrieveTodosForDisplay={this.retrieveTodosForDisplay}
        setDisplayItems={this.setDisplayItems}
        {...this.state} 
      />;
    }
  };

export default TodoList;