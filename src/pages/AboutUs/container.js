import React from 'react';

const AboutUs = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return <Wrapped 
      />;
    }
  };

export default AboutUs;