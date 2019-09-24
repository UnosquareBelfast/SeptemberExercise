import React from 'react';

const DeletedItem = (Wrapped) =>
  class extends React.Component {
    constructor(props) {
      super(props);
      const {title} =this.props.item;
      this.state = {
        title
      };  
    };

    render() {
      const {title} = this.state;
      return <Wrapped 
      title={title}
      />;
    }
  };

export default DeletedItem;