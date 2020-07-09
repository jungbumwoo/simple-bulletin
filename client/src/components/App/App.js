import React from "react";
import classNames from "classnames/bind";
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <Route path="/" component={Main} />
    </div>
    <div>
      This is Jungbum Woo.
    </div>
  </Router>
);

const Main = () => <div>Main</div>;

export default App;