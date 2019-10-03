import React, { Fragment } from 'react';
import container from './container';
import {SearchBox, SearchTitle, SearchSection, DeleteSearchButton, DeleteClearButton, ClearButtonPadding} from './styled';

export const DeletedSearchBar = ({deletedSearchTerm, deletedSearchTermProvided, searchForDeletedToDoListItem, clearDeletedSearchResults, ButtonHiddenForDeleted, clearButtonInvisibleForDeleted}) => {
  return (

    <Fragment>

      <SearchSection>
      <SearchTitle>Search Deleted To Do List</SearchTitle>
      <SearchBox value={deletedSearchTerm} placeholder="Search...." onChange={(event)=> deletedSearchTermProvided(event)}  ></SearchBox>
      <DeleteSearchButton onClick={() => {searchForDeletedToDoListItem(deletedSearchTerm)}}>Search</DeleteSearchButton>

      {!ButtonHiddenForDeleted ? 
      <ClearButtonPadding> 
        <DeleteClearButton onClick={() => {clearDeletedSearchResults(); clearButtonInvisibleForDeleted()}}>Clear Search Results</DeleteClearButton>
      </ClearButtonPadding> :<div>Button failure</div>}
      
      </SearchSection>

      
      
    </Fragment>
    
  );
};




export default container(DeletedSearchBar);
