import React from 'react';
import { createTodoListItem} from '../../../../services/todoService'

const AddToDo = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };  
    };

    handleSubmit = (event) => {
      console.log(this.state.taskValue);
      const { retrieveTodosForDisplay } = this.props;
      let title = this.state.taskValue;
      createTodoListItem(title).then(() => {
    retrieveTodosForDisplay();
      });
      event.preventDefault();
    }

    handleChange = (event) => {
      this.setState({taskValue: event.target.value});
    }

    render() {

      return <Wrapped 
        handleChange={() => this.handleChange}
        handleSubmit={() => this.handleSubmit}
        {...this.state} 
      />;
    }
  };

export default AddToDo;