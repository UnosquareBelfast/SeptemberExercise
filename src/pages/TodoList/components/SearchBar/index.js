import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection, SearchButton} from './styled';

export const SearchBar = ({searchTerm, searchTermProvided, searchForToDoListItem}) => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search To Do List</SearchTitle>
      <SearchBox onChange={(event)=> searchTermProvided(event)}  value={searchTerm} placeholder="Search...."></SearchBox>
      <SearchButton onClick={() => searchForToDoListItem(searchTerm)}>Search</SearchButton>
      </SearchSection>
      
    </Fragment>
    
  );
};




export default container(SearchBar);
