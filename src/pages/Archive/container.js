import React from 'react';
import {recieveDeletedTodoList,recoverTodoListItem,DeleteAllTodoList} from '../../services/deletedTodoService';

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
        this.setState({ DeletedListItems: DeletedListItems.sort(function(a,b){return a.id- b.id}), isLoading: false});
      });
    };

    removeDeletedTodoListItem = (id) => {
      recoverTodoListItem(id).then(() => {
        this.retrieveDeletedTodosForDisplay()
      });
    };

    deleteAll = () => {
      DeleteAllTodoList().then().catch((err) => {console.log(err)})
    };
 
  render() {
    return <Wrapped 
    removeDeletedTodoListItem = {this.removeDeletedTodoListItem} 
    deleteAll = {this.deleteAll}
    {...this.state}/>;
    
  }
};

export default Archive;