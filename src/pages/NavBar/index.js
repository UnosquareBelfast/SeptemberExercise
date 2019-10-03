import React, { Fragment } from 'react';

import container from './container';


import { BtnStyle, TodoNavTheme, TaskContainer, LeftSpan, ButtonsRight } from './styled';


import { Link } from "react-router-dom";

export const NavBar = () => {
  return (

    <Fragment>
      <TaskContainer>
        <TodoNavTheme>
          <LeftSpan>To do's</LeftSpan>
    <ButtonsRight>
          <BtnStyle><Link to="/" onMouseOver={() => console.log('mouse over')} >Home</Link></BtnStyle>
          <BtnStyle> <Link to="/about/">About</Link> </BtnStyle>
          <BtnStyle><Link to="/DeletedLog/">DeletedLog</Link></BtnStyle>
          </ButtonsRight>
        </TodoNavTheme>
      </TaskContainer>
    </Fragment>

  );
};


export default container(NavBar);