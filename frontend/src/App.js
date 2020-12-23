
import Login from './Components/Login'
import Register from './Components/Register'
import Dashboard from './Components/Dashboard'
import Logout from './Components/Logout'
import {Route, Switch} from 'react-router-dom'
function App() {
  return (   
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route  path="/register" component={Register} />
      <Route  path="/dashboard" component={Dashboard} />
      <Route  path="/logout" component={Logout} />
    </Switch>
        {/* <Login/>
        <Register/> */}
    </div>
  );
}

export default App;
