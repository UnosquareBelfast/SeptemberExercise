import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection} from './styled';

export const SearchBar = () => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search To Do List</SearchTitle>
      <SearchBox placeholder="Search...."></SearchBox>
      </SearchSection>
      
    </Fragment>
    
  );
};




export default container(SearchBar);
