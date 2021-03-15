import React, {useState, useEffect} from 'react'

function Register() {
const [user, setUser] = useState({
  email: "",
  password: "",
})
const [error, setError] = useState("")
  useEffect(() => {
      console.log(user);
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
    <div>
      <form onSubmit={SubmitAccount}>
        <input name="email" type='email' placeholder="Insert mail... "/>
        <input name="password"type='password' placeholder="Password "/>
        <input name="confirmPassword"type='password' placeholder="Confirm password "/>
        <input type='submit' value="Create account"/>
      </form>
      <p>{error}</p>
    </div>
  )
}

export default Register;