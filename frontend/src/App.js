
import Login from './Components/Login'
import Register from './Components/Register'
import {Route, Switch} from 'react-router-dom'
function App() {
  return (   
    <div className="App">
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
    </Switch>
        {/* <Login/>
        <Register/> */}
    </div>
  );
}

export default App;
