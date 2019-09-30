import React, { Fragment } from 'react';
import container from './container';
import { SearchArea, SearchTextArea } from './styled';

export const SearchBar = ({ searchText, handleChange }) => {

  return (
    <Fragment>
      <SearchArea>
        <SearchTextArea type='text' placeholder=' Search' onChange={handleChange(searchText) }></SearchTextArea>
      </SearchArea>
    </Fragment>
  )
};

export default container(SearchBar);
