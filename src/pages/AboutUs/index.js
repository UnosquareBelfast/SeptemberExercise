import React, { Fragment } from 'react';
// import { PropTypes as PT } from 'prop-types';
import { Link } from 'react-router-dom';
import container from './container';
import { GenNavBar } from '../Components/GenNavBar'

export const AboutUs = () => {

  return (
    <Fragment>
      <GenNavBar></GenNavBar>
      <h1>About Us</h1>
      <Link to='/'><button >Back</button></Link>
    </Fragment>
  );
};


export default container(AboutUs);
