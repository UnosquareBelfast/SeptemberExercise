import React from 'react';
import { retrieveTodoList, deleteTodoListItem } from '../../services/todoService';

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
        this.setDisplayItems(todoListItems);
      });
    };

    deleteItemFromList = (id) => {
      deleteTodoListItem(id).then(() => {
        const { todoListItems } = this.state;
        this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
      });
    };

    setDisplayItems = (todoListItems) => {
      this.setState({ 
        todoListItems: todoListItems.sort(function(a,b) {return a.id-b.id}),
        isLoading: false 
      });
    };

    
   
    render() {
      return <Wrapped 
        retrieveTodosForDisplay={this.retrieveTodosForDisplay}
        deleteItemFromList={this.deleteItemFromList}
        updateItemOnList={this.updateItemOnList}
        setDisplayItems={this.setDisplayItems}
        {...this.state} 
      />;
    }
  };

export default TodoList;