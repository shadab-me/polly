import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import initializeLogger from "../src/common/logger";
import LoginForm from "components/Authentication/Login";
import SignupForm from "components/Authentication/Signup";
import Home from "components/Home";
import axios from "axios";
import NavBar from "../src/components/NavBar";
import CreatePoll from "../src/components/Poll/CreatePoll";

const App = () => {
  useEffect(() => {
    /*eslint no-undef: "off"*/
    initializeLogger();
    logger.info("Log from js-logger");
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/signup" component={SignupForm} />
        <Route exact path="/createpoll" component={CreatePoll} />
      </Switch>
    </Router>
  );
};

export default App;
