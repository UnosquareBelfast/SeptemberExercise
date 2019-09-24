import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection, SearchButton, ClearButton, ClearButtonPadding} from './styled';

export const SearchBar = ({searchTerm, searchTermProvided, searchForToDoListItem, clearSearchResults, clearButtonVisible, buttonHidden}) => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search To Do List</SearchTitle>
      <SearchBox value={searchTerm} placeholder="Search...." onChange={(event)=> searchTermProvided(event)}  ></SearchBox>
      <SearchButton onClick={() => {searchForToDoListItem(searchTerm); clearButtonVisible()}}>Search</SearchButton>

      {!buttonHidden ? <button>Hello new button</button> :<div>It didn't workjdjdjdjdjdjddjdjj</div>}
      
      </SearchSection>

      <ClearButtonPadding>

      <ClearButton onClick={() => clearSearchResults()}>Clear Search Results</ClearButton>
      </ClearButtonPadding>
      
    </Fragment>
    
  );
};




export default container(SearchBar);
