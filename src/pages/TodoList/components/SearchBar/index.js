import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection, SearchButton, ClearButton, ClearButtonPadding} from './styled';

export const SearchBar = ({searchTerm, searchTermProvided, searchForToDoListItem, clearSearchResults, clearButtonVisible, buttonHidden, clearButtonInvisible}) => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search To Do List</SearchTitle>
      <SearchBox value={searchTerm} placeholder="Search...." onChange={(event)=> searchTermProvided(event)}  ></SearchBox>
      <SearchButton onClick={() => {searchForToDoListItem(searchTerm); clearButtonVisible()}}>Search</SearchButton>

      {!buttonHidden ? 
      <ClearButtonPadding> 
        <ClearButton onClick={() => {clearSearchResults(); clearButtonInvisible()}}>Clear Search Results</ClearButton>
      </ClearButtonPadding> :<div>Button failure</div>}
      
      </SearchSection>

      
      
    </Fragment>
    
  );
};




export default container(SearchBar);
