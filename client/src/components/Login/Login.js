import React, {useState, useEffect} from 'react'
import {LoginUser} from './../../lib/API';
import { useCookies } from 'react-cookie'
import LoginNav from '../LoginNav/LoginNav';
import './login.scss';

function Login({history}) {
    const [user, setUser] = useState({
        email: "",
        password: "",
      })
      const [cookie, setCookie] = useCookies(['token']);
 
      const ConnectAccount = (e) =>{
        e.preventDefault();
        setUser({
            email: e.target.email.value,
            password: e.target.password.value,
        })
      }
      useEffect(() => {
        console.log(cookie);
        if(cookie.token){
          history.push('/')
        }
       }, [cookie])
      useEffect(() => {
        console.log(user);
        if(user.email !== '' && user.password !== ''){
          const data = LoginUser(user);
          data.then((token) => {
            console.log(token.message);
            console.log(cookie)
            if(token.message !== 'account does not match') {
              setCookie('token', token.message);
              window.location.href = 'http://localhost:3000/'
            }
            
            console.log(cookie)
            
          })
        }
    }, [user])
      return (
    <div className='login'>
      <LoginNav />
      <form onSubmit={ConnectAccount}>
        <input name="email" type='email' placeholder="Insert mail... "/>
        <input name="password"type='password' placeholder="Password "/>
        <input type='submit' value="Connect account"/>
      </form>
    </div>
  )
}

export default Login;