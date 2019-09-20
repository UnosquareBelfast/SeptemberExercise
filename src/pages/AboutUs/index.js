import React, { Fragment } from 'react';

import container from './container';
import { AboutUsTitle, AboutUsText, AllAbout
 } from './styled';

export const AboutUs = () => {
  return (

    <Fragment>

       
      <AllAbout>
      <AboutUsTitle>
      About Us
    </AboutUsTitle>

    <AboutUsText>
      This app is useful for creating and managing a to do list. A user can add, update and remove from a to do list. 
    </AboutUsText>
      
      </AllAbout>
      
    </Fragment>
    
  );
};




export default container(AboutUs);
