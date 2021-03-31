import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import {useCookies} from 'react-cookie';
import { useEffect, useState } from "react";
import { DecodeToken} from './lib/API';
function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const [email, setEmail] = useState('') 
  const DisconnectUser = () => {
      removeCookie('token');
  }
  useEffect(() => {
    if(cookie.token) {
      const user = DecodeToken(cookie);
      
      user.then((data) => {
        setEmail(data.message.email)
      })
    }
  }, [cookie])
  return (
    <div className="App">
      <Router>
      {
        cookie.token ?
        <div>
        <button onClick={DisconnectUser}>Disconnect</button>
        <h1 className='welcome'>Welcome {email}</h1>
        </div>
        :
      <div>
       <Redirect to='/login'/>
     </div>
        }
        <Switch>
         <Route path='/login' component={Login}/>
         <Route path='/register' component={Register}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
