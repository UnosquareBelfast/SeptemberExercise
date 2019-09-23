import React from 'react';
import { updateTodoListItem } from '../../../../services/todoService'

const TodoListItem = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);

      const { title } = this.props.item;
      this.state = {
        isUpdating: false,
        displayText: title,
        title,
      };  
    };

    saveItem = (id, title) => {
      console.log('Update clicked' + id);
      (title.length<2 || title.length>30) ?
        alert("To do item must be between 2 and 30 characters in length")
      :   updateTodoListItem(id, title).then(() =>{
          const { isUpdating, title } = this.state;
          this.setState({
            isUpdating: !isUpdating,
            displayText:title
          })
        } 
        )
        
      
      
    }

    toggleUpdateMode = () => {
      const { displayText, isUpdating, title } = this.state;
      this.setState({
        title: isUpdating ? title : displayText,
        isUpdating: !isUpdating,
      });
    };

    onTitleChanged = (event) => {
      this.setState({
        title: event.target.value,
      });

      console.log(event.target.value);
    }

    render() {
      const { isUpdating, title, displayText } = this.state;
      const { deleteItem, item: { id }} = this.props;
      return <Wrapped 
        id={id}
        deleteItem={deleteItem}
        title={title}
        displayText={displayText}
        isUpdating={isUpdating}
        saveItem={this.saveItem}
        toggleUpdateMode={this.toggleUpdateMode}
        onTitleChanged={this.onTitleChanged}
      />;
    }
  };

export default TodoListItem;