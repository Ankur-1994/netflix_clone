import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./styles/index.css";
import App from "./components/presentation/App/App";
import Dashboard from "./components/presentation/dashboard/dashboard";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/dasboard" component={Dashboard} />
    </div>
  </Router>,
  document.getElementById("root")
);
