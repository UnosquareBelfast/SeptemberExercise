import React, { Fragment } from 'react';
import container from './container';
import { Link } from 'react-router-dom';
import { MyTodoBoard, TodoListTitle, MyNavBar, MyNavButtons, aboutUsText } from './styled';

export const AboutUs = () => {

  return (
    <Fragment>
      <MyTodoBoard>
        <TodoListTitle>Todo List</TodoListTitle>
        <MyNavBar>
          <MyNavButtons><Link to='/'>Home</Link></MyNavButtons>
          <MyNavButtons><Link to='/deleted/'>Deleted</Link></MyNavButtons>
        </MyNavBar>
        <aboutUsText>
          
        </aboutUsText>
      </MyTodoBoard>
    </Fragment>
  );
};

export default container(AboutUs);
