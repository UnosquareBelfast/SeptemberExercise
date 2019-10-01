import React from 'react';
import container from './container';

export const SearchBar = ({ searchText,handleChange }) => {
  return (
    
        
        <input placeholder=' Search...' onChange={handleChange(searchText)} type='text'></input>
  )
      
};


export default container(SearchBar);