import React from 'react';
import {  updateTodoListItem,retrieveTodosForDisplay} from '../../../../services/todoService'

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
    }
    toggleUpdateMode = () => {
      const { displayText, isUpdating, title } = this.state;
      this.setState({
        title: isUpdating ? title : displayText,
        isUpdating: !isUpdating,
      });
    };

    saveItem = (id,changedText) => {
      updateTodoListItem(id,changedText).then(() => {
        console.log(changedText);
        this.setState({
          displayText: changedText,
        }, () => { this.toggleUpdateMode() })
      });

    }
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
      />
    }
  };

export default TodoListItem;