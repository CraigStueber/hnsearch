
import { Switch, Route, Link } from "react-router-dom";

import History from './components/History';
import Search from './components/Search';
import Home from './components/Home';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


function App() {
  return (
    <div>
      <nav className="navbar navbar-expand navBar">
        <a href="/" className="navbar-brand">
          RTS Labs
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/search"} className="nav-link">
              Search Hacker News
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/history"} className="nav-link">
              History
            </Link>
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/search"} component={Search} />
          <Route exact path={"/history"} component={History} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
