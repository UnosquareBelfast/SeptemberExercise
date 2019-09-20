import React, { Fragment } from 'react';
import container from './container';
import { Link } from "react-router-dom";
import { 
  TodoListTitle,
  TodoNavBar,
  TodoTextBox,
  TodoImage,
  TodoAdd

 } from './styled';

 export const AboutUs = () => {


  return (
    <Fragment>
    <TodoListTitle>About us</TodoListTitle>
    <TodoAdd>
    <TodoNavBar ><Link to='/'>home</Link></TodoNavBar>
    </TodoAdd>
    <TodoTextBox> Hello! My name is Toby and i made this lovely website. Please do not sue Alison, i have no money... </TodoTextBox>
    <TodoImage src={require('./Toby.jpg')} />
  
  
  </Fragment>
  );
};

export default container(AboutUs);
