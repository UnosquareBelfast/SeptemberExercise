import React from 'react';
import { updateTodoListItem} from '../../../../services/todoService';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


const TodoListItem = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);

      const { title } = this.props.item;
      this.toggle = this.toggle.bind(this);
      this.state = {
        isUpdating: false,
        displayText: title,
        dropdownOpen: false
      };
    }

    toggle(){
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }

    render() {
      return (
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            Button Dropdown
          </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem Another Action > </DropdownItem>
        </DropdownMenu>
        </ButtonDropdown>
      )
    };


    saveItem = (id, changedText) => {
      updateTodoListItem(id, changedText).then(() => {
        console.log(changedText);
        this.setState({
         displayText: changedText,
      }, () => { this.toggleUpdateMode()})
    });
  };

    toggleUpdateMode = () => {
      const {displayText, isUpdating, title} = this.state;
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
      const{ isUpdating, title, displayText } = this.state;
      const{ deleteItem, item: {id }} = this.props;
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