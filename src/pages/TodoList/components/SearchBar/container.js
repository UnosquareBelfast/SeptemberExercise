import React from 'react';
import {searchToDoListItems} from '../../../../services/todoService';

const SearchBar = (Wrapped) =>
  class extends React.Component {

    constructor(props){
      super(props);
      
      this.state = {
        searchTerm: '',
      };
    };


    searchTermProvided = (event) => {
      this.setState({
        searchTerm:event.target.value,
      })
      console.log(event.target.value);
    }


    
  searchForToDoListItem = (searchTerm) => {

    (searchTerm<2) ?
    alert("Please enter a search term ") :
    searchToDoListItems(searchTerm).then((results) => { 
      (results.length===0)? alert("No to do tasks match this search"): 
      this.props.setDisplayItems(results);
      console.log(searchTerm+": searched for");
      console.log(results);
    });
  };

  clearButtonVisible = () =>{
    this.setState({
     
    })
    
  }

  clearSearchResults = () => {
    const { retrieveTodosForDisplay } = this.props;
    this.setState({
      searchTerm: ''
    }, () => { retrieveTodosForDisplay() });
  }





       
    render() {
      const {searchTerm}=this.state;
      return <Wrapped 
        searchTerm={searchTerm}
        clearButtonVisible={this.clearButtonVisible}
        searchTermProvided={this.searchTermProvided}
        searchForToDoListItem={this.searchForToDoListItem}
        clearSearchResults={this.clearSearchResults}
      />;
    }
  };

export default SearchBar;