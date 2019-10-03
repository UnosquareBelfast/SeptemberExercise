import React, { Fragment } from 'react';
import container from './container';
import { 
  TodoListTitle,
  TodoTextBox,
  TodoImage

 } from './styled';

 export const AboutUs = () => {


  return (
    <Fragment>
    <TodoListTitle>About us</TodoListTitle>
    <TodoTextBox> Hello! My name is Toby and i made this lovely website. Please do not sue Alison, i have no money... </TodoTextBox>
    <TodoImage src={require('./Toby.jpg')} />
  
  
  </Fragment>
  );
};

export default container(AboutUs);
