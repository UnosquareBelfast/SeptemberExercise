import React from 'react';
import { retrieveTodoList, deleteTodoListItem } from '../../services/todoService'

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

    retrieveTodosForDisplay = () => {
      retrieveTodoList().then((todoListItems) => {
        this.setState({ todoListItems, isLoading: false });
      });
    };

    deleteItemFromList = (id) => {
      deleteTodoListItem(id).then(() => {
        const { todoListItems } = this.state;
        const updatedItems = todoListItems.filter(x => x.id !== id);

        this.setState({ todoListItems: updatedItems});
      });
    };

    render() {
      return <Wrapped 
        deleteItemFromList={this.deleteItemFromList}
        {...this.state} 
      />;
    }
  };

export default TodoList;