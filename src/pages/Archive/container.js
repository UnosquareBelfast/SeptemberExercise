import React from 'react';
import {recieveDeletedTodoList,recoverTodoListItem} from '../../services/deletedTodoService';

const Archive = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        DeletedListItems: [],
        isLoading: true
      };
    }

    componentDidMount() {
      this.retrieveDeletedTodosForDisplay();
    }

    retrieveDeletedTodosForDisplay = () => {
      recieveDeletedTodoList().then((DeletedListItems) => {
        this.setState({ DeletedListItems: DeletedListItems.sort(function(a,b){return a.id, b.id}), isLoading: false});
      });
    };

    removeDeletedTodoListItem = (id) => {
      recoverTodoListItem(id).then(() => {
        this.retrieveDeletedTodosForDisplay()
      });
    };
 
  render() {
    return <Wrapped 
    removeDeletedTodoListItem = {this.removeDeletedTodoListItem} 
    {...this.state}/>;
    
  }
};

export default Archive;