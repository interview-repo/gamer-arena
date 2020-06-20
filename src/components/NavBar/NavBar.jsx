import React from 'react';
import Logo from '../../static/logo/Logo.png';
import { Header } from './style';

const NavBar = _ => { 
  return (
    <>
      <Header>
        <img src={Logo} alt="Gamer Arena"></img>
      </Header>
    </>
  )
}

export default NavBar;