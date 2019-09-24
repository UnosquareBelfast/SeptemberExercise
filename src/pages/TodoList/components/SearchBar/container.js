import React from 'react';
import {searchToDoListItems} from '../../../../services/todoService';

const SearchBar = (Wrapped) =>
  class extends React.Component {

    constructor(props){
      super(props);
      
      this.state = {
        searchTerm: '',
        buttonHidden: true,
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

    const {buttonHidden} =this.state;
    this.setState({
      buttonHidden: false
    })

    console.log(buttonHidden);
    
  }

  clearSearchResults = () => {
    const { retrieveTodosForDisplay } = this.props;
    this.setState({
      searchTerm: ''
    }, () => { retrieveTodosForDisplay() });
  }





       
    render() {
      const {searchTerm, buttonHidden}=this.state;
      return <Wrapped 
        searchTerm={searchTerm}
        buttonHidden={buttonHidden}
        clearButtonVisible={this.clearButtonVisible}
        searchTermProvided={this.searchTermProvided}
        searchForToDoListItem={this.searchForToDoListItem}
        clearSearchResults={this.clearSearchResults}
      />;
    }
  };

export default SearchBar;