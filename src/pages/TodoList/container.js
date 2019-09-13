import React from 'react';
import { retrieveTodoList, deleteTodoListItem } from '../../services/todoService'

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
        todoListItems.sort(function(a, b){
          return a.id - b.id;
        });
        this.setState({ todoListItems, isLoading: false });
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
        retrieveTodosForDisplay={this.retrieveTodosForDisplay}
        handleChange={() => this.handleChange}
        handleTaskSubmission={this.handleTaskSubmission}
        {...this.state} 
      />;
    }
  };

export default TodoList;