import React from 'react';
import { createTodoListItem } from '../../../../services/todoService'

const AddListItem = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        title:'',
      };
    }
    
    addItemToList = (title) => {
      createTodoListItem(title).then(() => {
        const { retrieveTodosForDisplay } = this.props;
        this.setState({
          title:''
        }, () => { retrieveTodosForDisplay() } );
      });
    };

    render() {
      const { title } = this.state;
      return <Wrapped 
      title = {title}
      addItemToList={this.addItemToList}
      {...this.state}
      />;
    }
  };

export default AddListItem;