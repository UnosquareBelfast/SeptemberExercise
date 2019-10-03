import React from 'react';
import {searchDeletedToDoListItems} from '../../../../services/deletedTodoService';

const DeletedSearchBar = (Wrapped) =>
  class extends React.Component {

    constructor(props){
      super(props);
      
      this.state = {
        deletedSearchTerm: '',
        ButtonHiddenForDeleted: true,
      };
    };


    deletedSearchTermProvided = (event) => {
      this.setState({
        deletedSearchTerm:event.target.value,
      })
      console.log(event.target.value);
    }


    
  searchForDeletedToDoListItem = (deletedSearchTerm) => {
    (deletedSearchTerm.length<2) ?
    alert("Please enter a search term ") :
    searchDeletedToDoListItems(deletedSearchTerm).then((results) => { 
      if(results.length===0){
        alert("No to do tasks match this search");
        this.setState({
          deletedSearchTerm:'',
        })
      }else{
        this.props.setDeletedDisplayItems(results);
        this.clearButtonVisibleForDeleted();
        this.setState({
          deletedSearchTerm:'',
        })
      }
      console.log(deletedSearchTerm+": searched for");
      console.log(results);
      
    });
  };

  clearButtonVisibleForDeleted = () =>{

    const {ButtonHiddenForDeleted} =this.state;
    this.setState({
      ButtonHiddenForDeleted: false
    })

    console.log(ButtonHiddenForDeleted);
    
  }

  clearDeletedSearchResults = () => {
    const { retrieveDeletedTodosForDisplay } = this.props;
    this.setState({
      deletedSearchTerm: ''
    }, () => { retrieveDeletedTodosForDisplay() });
  }

  clearButtonInvisibleForDeleted = () => {
    this.setState({
      ButtonHiddenForDeleted: true
    })
  }

       
    render() {
      const {deletedSearchTerm, ButtonHiddenForDeleted}=this.state;
      return <Wrapped 
      deletedSearchTerm={deletedSearchTerm}
      ButtonHiddenForDeleted={ButtonHiddenForDeleted}
      clearButtonVisibleForDeleted={this.clearButtonVisibleForDeleted}
      deletedSearchTermProvided={this.deletedSearchTermProvided}
      searchForDeletedToDoListItem={this.searchForDeletedToDoListItem}
      clearDeletedSearchResults={this.clearDeletedSearchResults}
      clearButtonInvisibleForDeleted={this.clearButtonInvisibleForDeleted}
      />;
    }
  };

export default DeletedSearchBar;