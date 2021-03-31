import React, { useEffect, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import './loginNav.scss';
import logo from './../../assets/logo.svg';
import logo_board from './../../assets/logo_board.svg';
const LoginNav = () => {
  const [logos, setLogos] = useState([])
  const generateLogos = () => {
    const arr = []
    for (let i = 0; i < 300; i++) {
      arr.push(logo_board);
    }
    setLogos(arr);
  }
  useEffect(() => {
    generateLogos();
  }, [])
  useEffect(() => {
    console.log(logos);
}, [logos])
  return (
    <div className='nav-login'>
      <div className='logo'>
        <img className='logo-image' src={logo} alt='logo' />
        <h1>Edubel</h1>
      </div>
      <div className='links'>
      <Link to='/login' activeClassName='selected'>
        <p>Se connecter</p>
      </Link>
      <Link to='/register'activeClassName='selected'>
        <p>Créer un compte</p>
      </Link>
      </div>
      <div className='board'>
        <div className='logos'>
        {logos.map((logo,i) => (
          <img src={logo} alt='logo' key={i}/>
        ))}
        </div>
       
      </div>
    </div>
  )
}


export default LoginNav;