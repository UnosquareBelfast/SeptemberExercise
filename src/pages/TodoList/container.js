import React from 'react';
import { retrieveTodoList, deleteTodoListItem, createTodoListItem } from '../../services/todoService'

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
    
    createItemOnList = (title) => {
      //alert(title);
      createTodoListItem(title).then(() => {
        this.retrieveTodosForDisplay();
      });
    };

    deleteItemFromList = (id) => {
      deleteTodoListItem(id).then(() => {
        const { todoListItems } = this.state;
        this.setState({ todoListItems: todoListItems.filter(x => x.id !== id) });
      });
    };

    handleChange(event) {
      this.setState({value: event.target.value});
    };

    handleTaskSubmission(event) {
      //alert('New Todo Added' + this.state.value);
      event.preventDefault();
    };

    render() {
      return <Wrapped 
        deleteItemFromList={this.deleteItemFromList}
        createItemOnList={this.createItemOnList}
        handleChange={() => this.handleChange}
        handleTaskSubmission={this.handleTaskSubmission}
        {...this.state} 
      />;
    }
  };

export default TodoList;