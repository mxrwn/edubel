import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="App">
     <Router>
       <Link to='/login' >LOGIN</Link>
       <Link to='/register' >REGISTER</Link>
       <Switch>
         <Route path='/login' component={Login}/>
         <Route path='/register' component={Register}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
