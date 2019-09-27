import React, { Fragment } from 'react';
import { SearchBar } from '../../TodoList/components';
import { Navbar, Nav, NavItem, NavDropdown, Glyphicon } from "react-bootstrap";
import container from './container';
import { LinkContainer } from "react-router-bootstrap";

export const GenNavBar = ({ setDisplayItems, showSearch }) => {


  const checkSearch = (showSearch) => {
    if (showSearch) {
      return <SearchBar setDisplayItems={setDisplayItems} ></SearchBar>
    }
  };

  return (
    <Fragment>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <LinkContainer to='/'>
  <Navbar.Brand>Todos</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/about">
      <Nav.Link>About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/archive">
      <Nav.Link>Archive</Nav.Link>
      </LinkContainer>
    </Nav>
    <Nav>
     {checkSearch(showSearch)}   
    </Nav>
  </Navbar.Collapse>
  
</Navbar>
    </Fragment>
  );
};

GenNavBar.propTypes = {
  
};

export default container(GenNavBar);
