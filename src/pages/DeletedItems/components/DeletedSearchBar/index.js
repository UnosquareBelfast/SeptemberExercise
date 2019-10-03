import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection, SearchButton, ClearButton, ClearButtonPadding} from './styled';

export const DeletedSearchBar = ({deletedSearchTerm, deletedSearchTermProvided, searchForDeletedToDoListItem, clearDeletedSearchResults, ButtonHiddenForDeleted, clearButtonInvisibleForDeleted}) => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search Deleted To Do List</SearchTitle>
      <SearchBox value={deletedSearchTerm} placeholder="Search...." onChange={(event)=> deletedSearchTermProvided(event)}  ></SearchBox>
      <SearchButton onClick={() => {searchForDeletedToDoListItem(deletedSearchTerm)}}>Search</SearchButton>

      {!ButtonHiddenForDeleted ? 
      <ClearButtonPadding> 
        <ClearButton onClick={() => {clearDeletedSearchResults(); clearButtonInvisibleForDeleted()}}>Clear Search Results</ClearButton>
      </ClearButtonPadding> :<div>Button failure</div>}
      
      </SearchSection>

      
      
    </Fragment>
    
  );
};




export default container(DeletedSearchBar);
