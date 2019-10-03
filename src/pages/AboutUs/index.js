import React, { Fragment } from 'react';
import container from './container';
import { 
  AboutUsText,
  TodoImage

 } from './styled';

 export const AboutUs = () => {


  return (
    <Fragment>
    <AboutUsText> Hello! My name is Toby and i made this lovely website. Please do not sue Alison, i have no money... </AboutUsText>
    <TodoImage src={require('./Toby.jpg')} />
  
  
  </Fragment>
  );
};

export default container(AboutUs);
