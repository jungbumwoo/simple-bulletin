import React from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = ({ isLoggedIn }) => (
  <Router>
    <div>{isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
  </Router>
);

const PublicComponent = () => <div>not logged in</div>;

const PrivateComponent = () => <div>loggedIn</div>;

export default App;




