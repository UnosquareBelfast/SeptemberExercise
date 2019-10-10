import React, { Fragment } from 'react';
import container from './container';
import { 
  UserText

 } from './styled';

 export const Users = ({retrieveUsersToDisplay}) => {


  return (
    <Fragment>
    <UserText> Welcome to do log in!</UserText>

    <textarea id='loginUsername'></textarea>
    <textarea id='loginpassword'></textarea>
    <button>Log in</button>

    <UserText>If you havent got an account sign up! What are the benefits you ask? Well absolutely nothing! No benefits to signing up, so go on DO IT</UserText>

    <textarea id='SignUpEmail'></textarea>
    <textarea id='SignUpUsername'></textarea>
    <textarea id='SignUpPassword'></textarea>
    <button onClick={() => retrieveUsersToDisplay()} >Sign Up</button>
  </Fragment>
  );
};

export default container(Users);
