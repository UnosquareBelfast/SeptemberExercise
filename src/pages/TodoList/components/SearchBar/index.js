import React, { Fragment } from 'react';

export const SearchBar = ({searchTerm, searchTermProvided, searchForToDoListItem, clearSearchResults, buttonHidden, clearButtonInvisible}) => {
    return (
        <Fragment>
            
            <SearchSection>
            <SearchTitle>Search to do list</SearchTitle>
            <SearchBox value={searchTerm} placeholder="Search.." onChange={(event)=> searchTermProvided(event)}></SearchBox>
            <SearchButton onClick={() => {searchForToDoListItem(searchTerm)}}> Search </SearchButton>

            {!buttonHidden ?
            <ClearButtonPadding>
                <ClearButton onClick={()=> {clearSearchResults(); clearButtonInvisible()}}>Clear Search</ClearButton>
            </ClearButtonPadding> : <div>Button failure</div>}
            </SearchSection>

        </Fragment>
    );
};

export default container(SearchBar);