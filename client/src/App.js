import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";

import Books from "./pages/books";
import Add from "./pages/add";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Books} />
            <Route exact path="/add" component={Add} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;