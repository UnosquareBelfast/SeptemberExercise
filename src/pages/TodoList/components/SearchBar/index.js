import React, { Fragment } from 'react';
import container from './container';

export const SearchBar = ({ searchText,handleChange }) => {
  return (
    
        <Fragment>
        <input placeholder=' Search...' onChange={handleChange(searchText)} type='text'></input>
        </Fragment>)
      
};


export default container(SearchBar);