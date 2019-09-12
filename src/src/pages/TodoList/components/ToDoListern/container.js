import React from 'react';
import { retrieveTodoList, deleteTodoListItem, updateTodoListItem,createTodoListItem } from '../../services/todoService'

const TodoList = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      };
    

    render() {
      return <Wrapped 
        {...this.state} 
      />;
    }
  };

export default TodoList;