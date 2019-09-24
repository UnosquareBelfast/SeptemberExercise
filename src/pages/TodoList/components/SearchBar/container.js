import React from 'react';
import {retrieveFilteredTodoListItem} from '../../../../services/todoService'

const SearchBar = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: '',
        filteredList: [],
      };  
    };

    handleSubmit = () => {
      retrieveFilteredTodoListItem(this.state.searchText).then((results) => {
      this.props.setDisplayItems(results);
      });
      };
    
    handleChange = (event) => {
      this.setState({searchText: event.target.value},this.handleSubmit);
    }

    render() {

      return <Wrapped 
        handleChange={() => this.handleChange}
        handleSubmit={() => this.handleSubmit}
        {...this.state} 
      />;
    }
  };

export default SearchBar;