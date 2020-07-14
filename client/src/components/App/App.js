import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "components/Login/loginContainer";
const cx = classNames.bind(styles);

const App = ({ isLoggedIn }) => (
  <Router>
    <div>{isLoggedIn ? PrivateComponent() : PublicComponent()}</div>
  </Router>
);

const PublicComponent = () => (
  <div>
    <LoginContainer />
  </div>
)

const PrivateComponent = () => <div>loggedIn</div>;

export default App;




