import React from 'react';

const DeletedItem = (Wrapped) =>
    class extends React.Component {
        constructor(props){
            super(props)
            const{title}=this.props.item;
            this.state = {
                title,
            };
        };

        render(){
            const {title} = this.state;
            const {restoreItem, item: {id}}=this.props;
            return <Wrapped
            title={title}
            id={id}
            restoreItem={restoreItem}
            />;
        };
    };

    export default DeletedItem;
