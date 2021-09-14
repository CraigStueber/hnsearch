
import { Switch, Route, Link } from "react-router-dom";

import History from './components/History';
import Search from './components/Search';
import Home from './components/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import logo from './assets/RTSLabs.jpg';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navBar">
        <a href="/rtslabs" className="navbar-brand">
         <img src={logo} alt="RTS Labs White Logo on Green background" />
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/rtslabs/search"} className="nav-link">
              Search Hacker News
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/rtslabs/history"} className="nav-link">
              History
            </Link>
          </li>
        </div>
      </nav>
 
      <div className="container mt-3">
        <Switch>
          <Route exact path={"/rtslabs"} component={Home} />
          <Route exact path={"/rtslabs/search"} component={Search} />
          <Route exact path={"/rtslabs/history"} component={History} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
