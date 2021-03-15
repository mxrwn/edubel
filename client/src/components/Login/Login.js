import React, {useState, useEffect} from 'react'

function Login() {
    const [user, setUser] = useState({
        email: "",
        password: "",
      })
 
      const ConnectAccount = (e) =>{
        e.preventDefault();
        setUser({
            email: e.target.email.value,
            password: e.target.password.value,
        })
      }
      useEffect(() => {
        console.log(user);
      }, [user])
      return (
    <div>
      <form onSubmit={ConnectAccount}>
        <input name="email" type='email' placeholder="Insert mail... "/>
        <input name="password"type='password' placeholder="Password "/>
        <input type='submit' value="Connect account"/>
      </form>
    </div>
  )
}

export default Login;