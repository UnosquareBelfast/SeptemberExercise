import React from 'react';
import { createTodoListItem } from '../../../../services/todoService'



const AddNewToDoListItem = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title: ''
      };  
    };

    onNewTaskBoxChange = (event) => {
      this.setState({
        title:event.target.value,
      });
      console.log(event.target.value);
    };

    addNewTask=(title)=>{

      console.log('New task title: '+title);
      createTodoListItem(title).then(()=>{
        const { retrieveTodosForDisplay } = this.props;
        this.setState({
          title:''
        }, () => { retrieveTodosForDisplay() });
      })

    };

    render() {
      
      const {title}=this.state;
      return <Wrapped 
        title={title}
        onNewTaskBoxChange={this.onNewTaskBoxChange}
        addNewTask={this.addNewTask}
        {...this.state}
      />;
    }
  };

export default AddNewToDoListItem;