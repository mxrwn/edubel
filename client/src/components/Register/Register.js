import React, {useState, useEffect} from 'react';
import {RegisterUser} from './../../lib/API';
import { useCookies } from 'react-cookie'
import LoginNav from '../LoginNav/LoginNav';
import './register.scss';

function Register({history}) {
const [user, setUser] = useState({
  email: "",
  password: "",
})
const [cookie, setCookie] = useCookies(['token']);


useEffect(() => {
 console.log(cookie);
 if(cookie.token){
   history.push('/')
 }
}, [cookie])


const [error, setError] = useState("")
  useEffect(() => {
      console.log(user);
      if(user.email !== '' && user.password !== ''){
        const data = RegisterUser(user);
        data.then((token) => {
          console.log(token.message);
          console.log(cookie)
          if(token.message !== 'user already exist') {
            setCookie('token', token.message);
            window.location.href = 'http://localhost:3000/'
          }else{
            setError(token.message);
          }
          
          console.log(cookie)
          
        })
      }
  }, [user])

 const SubmitAccount = (e) =>{
     e.preventDefault();
     if(e.target.password.value === e.target.confirmPassword.value){
         setUser({
             email: e.target.email.value,
             password: e.target.password.value,
         })
     }else{
         setError("The passwords are not equal")
     }

 }
    return (
      <div className='register'>
        <LoginNav />
      <form onSubmit={SubmitAccount}>
        <input name="email" type='email' placeholder="Insert mail... "/>
        <input name="password"type='password' placeholder="Password "/>
        <input name="confirmPassword"type='password' placeholder="Confirm password "/>
        <input type='submit' value="Create account" />
        <p className='error'>{error}</p>
      </form>
      
    </div>
  )
}

export default Register;