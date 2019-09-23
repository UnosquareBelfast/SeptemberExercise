import React from 'react';

const SearchBar = (Wrapped) =>
  class extends React.Component {
       
    render() {
      return <Wrapped 
      />;
    }
  };

export default SearchBar;