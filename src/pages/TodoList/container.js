import React from 'react';
import { retrieveTodoList, deleteTodoListItem, createTodoListItem,updateTodoListItem } from '../../services/todoService';

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

    handleChange(event){
      this.setState({value: event.target.value});
    }

    handleTaskSubmission(event){
      alert('New Task Added' +this.state.value);
      event.preventDefault();
    }

    UpdateItemFromList = (id, title) => {
      updateTodoListItem(id,title).then(() => {
        retrieveTodoList().then((todoListItems) => {
          this.setState({ todoListItems,title});
        });
      });
    };

    createItemOnList = (title) => {
      alert(title);

      createTodoListItem(title).then(() => {

        this.retrieveTodosForDisplay();
      })
    }

    render() {
      return <Wrapped 
      deleteItemFromList={this.deleteItemFromList}
      UpdateItemFromList={this.UpdateItemFromList}
      createItemOnList={this.createItemOnList}
      handleChange={() => this.handleChange}
      handleTaskSubmission={this.handleTaskSubmission}
      {...this.state} 
      />;
    }
  };

export default TodoList;