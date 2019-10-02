import React, { Fragment } from 'react';
import container from './container';
import { AboutUsTitle, Paragraph } from './styled';

export const AboutUs = () => {
  return (
    <Fragment>
      <AboutUsTitle>About Us Page</AboutUsTitle>
      <Paragraph>Information on about us page</Paragraph>
    </Fragment>
  );
};

export default container(AboutUs);