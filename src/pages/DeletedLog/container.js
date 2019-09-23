import React from 'react';
import {recieveDeletedTodoList} from '../../services/deletedTodoService';

const DeletedLog = (Wrapped) =>
  class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          DeletedListItems: [],
          isLoading: true,
        };
      }

      componentDidMount() {
        this.retrieveDeletedTodosForDisplay();
      }

      retrieveDeletedTodosForDisplay = () => {
        recieveDeletedTodoList().then((DeletedListItems) => {
          console.log(DeletedListItems);
          this.setState({ DeletedListItems: DeletedListItems.sort(function(a,b){return a.id, b.id}), isLoading: false});
        });
      };
   
    render() {
      return <Wrapped {...this.state}/>;
      
    }
  };

export default DeletedLog;