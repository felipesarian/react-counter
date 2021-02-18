import './App.css';
import Login from "./views/Login";
import Cadastro from './views/Cadastro';
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App login-container">
      <Router>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route  path='/cadastro'><Cadastro/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
