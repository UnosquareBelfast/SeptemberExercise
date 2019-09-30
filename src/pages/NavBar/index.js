import React, {Fragment} from 'react';
import container from './container';
import {BtnStyle} from './styled';
import {Link} from "react-router-dom";

export const NavBar = () => {
    return (
        <Fragment>
            <BtnStyle><Link to="/" onMouseOver={() =>console.log('mouse over')}>Home</Link></BtnStyle>
            <BtnStyle><Link to="/about">Home</Link></BtnStyle>
            <BtnStyle><Link to="/deleted">Home</Link></BtnStyle>
        </Fragment>
    );
};

export default container(NavBar);