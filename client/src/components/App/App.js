import React from "react";
import styles from "./styles.scss";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginContainer from "../Login/LoginContainer";
import NavigationContainer from "../Navigation/NavigationContainer";
// 최종에서 이거도 있음. import BoardListContainer from "components/BoardList/BoardListContainer";
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
);

const PrivateComponent = () => (
  <div>
    <NavigationContainer />
  </div>
);

export default App;




