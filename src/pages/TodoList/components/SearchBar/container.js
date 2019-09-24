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
    searchToDoListItems(searchTerm).then((results) => { 
      this.props.setDisplayItems(results);
      console.log(searchTerm+": searched for");
      console.log(results);
    });
  };

       
    render() {
      const {searchTerm}=this.state;
      return <Wrapped 
        searchTerm={searchTerm}
        searchTermProvided={this.searchTermProvided}
        searchForToDoListItem={this.searchForToDoListItem}
      />;
    }
  };

export default SearchBar;