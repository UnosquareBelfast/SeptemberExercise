import React, { Fragment } from 'react';
import container from './container';
import { Link } from "react-router-dom";
import { AboutUsTitle, AboutNavBar, Paragraph
} from './styled';

export const AboutUs = () => {
  return (
    <Fragment>
      <AboutUsTitle>About Us Page</AboutUsTitle>
      <Paragraph>Information on about us page</Paragraph>
      <AboutNavBar><Link to='/'>Home Page</Link></AboutNavBar>
    </Fragment>
);
};

export default container(AboutUs);